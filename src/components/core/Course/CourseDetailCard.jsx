import { configureStore } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import copy from 'copy-to-clipboard';
import { ACCOUNT_TYPE } from "../../../utils/constants"
import { addToCart } from '../../../slice/cartSlice';

function CourseDetailCard({ course, setConfirmationModal, handleBuyCourse }) {

    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        thumbnail: ThumbnailImage,
        price: currentPrice,
    } = course;

    // console.log(ThumbnailImage);
    // console.log(currentPrice);

    const handleAddToCart = () => {
        if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
            toast.error("You are an Instructor , you can't buy a course");
            return;
        }

        if (token) {
            dispatch(addToCart(course));
            return;
        }

        setConfirmationModal({
            text1: "You are not logged in",
            text2: "Please login to add to cart",
            btn1text: "login",
            btn2text: "cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null),
        })
    }

    const handleShare = () => {
        copy(window.location.href);
        toast.success("Link copied to clipboard")
    }




    return (
        <div className={`${course?.studentsEnrolled.includes(user?._id) ? "absolute right-20 -bottom-[380px] w-[380px] bg-richblack-700 rounded-xl" : " absolute right-20 -bottom-[400px] w-[380px] bg-richblack-700 rounded-xl"}`}>
            <img
                src={ThumbnailImage}
                alt='Thumbnail image'
                className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl object-cover'
            />
            <div className='p-4 mx-auto'>
                <div className=' font-bold text-2xl mt-3 mb-3'>
                    Rs. {currentPrice}
                </div>
                <div className='flex flex-col gap-y-3'>

                    {
                        (!course?.studentsEnrolled.includes(user?._id)) && (
                            <button
                                className='bg-yellow-50 w-[340px] mx-auto p-3 text-richblack-800  rounded-xl font-medium'
                                onClick={handleAddToCart}
                            >
                                Add To Cart
                            </button>
                        )
                    }

                    <button
                        className={`bg-richblack-800 w-[340px] mx-auto p-3 text-richblack-25  rounded-xl font-medium 
                            ${user && course?.studentsEnrolled.includes(user?._id) ? " bg-yellow-50 text-richblack-800" : " text-richblack-25 bg-richblack-800"} : `}
                        onClick={
                            user && course?.studentsEnrolled.includes(user?._id) ?
                                () => navigate("/dashboard/enrolled-courses") :
                                handleBuyCourse

                        }
                    >
                        {
                            user && course?.studentsEnrolled.includes(user?._id) ? "Go to course" :
                                "Buy Now"

                        }
                    </button>
                </div>

                <div className="">
                    <p className='flex justify-center text-white text-sm mt-4'>
                        30 Day Money-Back Guarantee
                    </p>
                    <p className=' mt-4'>
                        This course includes:
                    </p>
                    <div className='flex flex-col gap-x-3'>
                        {
                            course?.instructions?.map((item, index) => (
                                <p key={index} className='flex gap-x-2'>
                                    <span className=' text-caribbeangreen-100 mt-1'>{item}</span>
                                </p>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <button
                        className='mx-auto flex items-center gap-2 p-3 text-yellow-50'
                        onClick={handleShare}
                    >
                        share
                    </button>
                </div>
            </div>
        </div>
    );

}

export default CourseDetailCard;
