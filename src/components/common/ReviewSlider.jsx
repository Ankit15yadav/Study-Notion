import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// import ReactStars from "./RatingStars"
import { apiConnector } from '../../services/apiconnector';
import { ratingsEndpoints } from '../../services/apis';
import { FreeMode, Pagination, Autoplay } from "swiper/modules"
import RatingStars from 'react-stars';
import { FaStar } from 'react-icons/fa6';


const ReviewSlider = () => {

    const [reviews, setReviews] = useState([]);
    const truncateWords = 15;

    useEffect(() => {

        const fetchAllReviews = async () => {
            const response = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
            console.log(response);

            const { data } = response;
            if (data?.success) {
                setReviews(data?.data);
            }

        }

        fetchAllReviews();
        console.log("Printing reviews", reviews)


    }, [])

    return (
        <div className='text-white'>
            <div className='h-[190px] max-w-maxContent'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={24}
                    loop={true}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className='w-full'
                >
                    {
                        reviews.length > 0 ?
                            reviews.map((review, index) => (
                                <SwiperSlide key={index}
                                    className=' bg-richblack-800 p-3 rounded-2xl'
                                >
                                    <img
                                        src={review?.user?.image ?
                                            review?.user?.image :
                                            `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}

                                        alt='profile pic'
                                        className='h-9 w-9 object-cover rounded-full'
                                    />
                                    <p className=' font-bold text-richblack-300'>{review?.user?.firstName} {review?.user?.lastName} </p>
                                    <p>{review?.course?.courseName} </p>

                                    <p>
                                        {review?.review}
                                    </p>
                                    <p>{review?.rating.toFixed(1)} </p>

                                    <RatingStars
                                        count={5}
                                        value={review?.rating}
                                        size={20}
                                        edit={false}
                                        activeColor="ffd700"
                                        emptyIcon={<FaStar />}
                                        fullIcon={<FaStar />}
                                    />
                                </SwiperSlide>
                            ))
                            :
                            (<div className=' text-2xl font-bold text-yellow-50'>
                                No Reviews found
                            </div>)
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default ReviewSlider
