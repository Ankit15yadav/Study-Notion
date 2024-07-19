import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentsFeaturesAPI';
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';
import GetAvgRating from "../utils/avgRating"
import Error from "./Error";
import confirmationModal from "../components/common/ConfirmationModal"
import RatingStars from "../components/common/RatingStars"
import { formatDate } from "../services/formatDate"
import CourseDetailCard from '../components/core/Course/CourseDetailCard';
import { CiGlobe } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Accordian from '../components/core/Course/Accordian';
import ReviewSlider from "../components/common/ReviewSlider"
import Footer from '../components/common/Footer';


const CourseDetails = () => {

    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const { loading } = useSelector((state) => state.profile);
    const { paymentLoading } = useSelector((state) => state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { courseId } = useParams();

    const [courseData, setCourseData] = useState(null);
    const [confirmation, setConfirmationModal] = useState(null);

    useEffect(() => {

        const getCourseFullDetails = async () => {
            try {
                const result = await fetchCourseDetails(courseId);
                setCourseData(result);


            } catch (err) {
                console.log("Could not fetch course details");
            }
        }

        getCourseFullDetails();
        console.log("data", courseData);


    }, [courseId]);

    //review k lie  
    const [avgReviewCount, setAvgReivewCount] = useState(0);
    useEffect(() => {

        const count = GetAvgRating(courseData?.data?.courseDetails.ratingAndReviews);
        setAvgReivewCount(count);

    }, [courseData])

    //lecture count k lie
    const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
    useEffect(() => {

        let lectures = 0;
        courseData?.data?.courseDetails?.courseContent?.forEach(sec => {
            lectures += sec.subSection.length || 0;
        })
        setTotalNoOfLectures(lectures);

    }, [courseData]);

    const [isActive, setIsActive] = useState(Array(0));

    const handleActive = (id) => {
        setIsActive(
            !isActive.includes(id) ? isActive.concat(id) : isActive.filter((e) => e !== id)
        )
    }

    // to update
    const handleBuyCourse = () => {
        console.log(token);

        if (token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }

        // console.log("Token agya")

        //koi jisne login nhi kia vo buy krne ja rha hai
        setConfirmationModal({
            text1: "You are not Logged in",
            text2: "Please login to purchase the course",
            btn1Text: "Login",
            btn2Text: "Cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null)
        })

    }

    if (loading || !courseData) {
        return (
            <div>
                Loading.....
            </div>
        )
    }

    if (!courseData.success) {
        return (
            <div>
                <Error />
            </div>
        )
    }

    const {
        // _id: course_Id,
        courseName,
        courseDescription,
        thumbnail,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentsEnrolled,
        createdAt,
    } = courseData?.data?.courseDetails;

    // const shortDes = courseDescription.slice(0,15);


    return (

        <div className='flex flex-col text-white '>
            <div className='bg-richblack-800 '>

                <div className='relative flex flex-col justify-start p-8 h-[280px] bg-richblack-800 w-11/12 mx-auto'>
                    <p className='text-sm mb-2'> Home / Learning / <span className=' text-yellow-25'>{courseData?.data?.courseDetails?.category?.name}</span></p>
                    <p className=' text-2xl font-medium mb-2'>{courseName}</p>
                    <p className='text-sm text-richblack-300 mb-2 max-w-[800px]'>{courseDescription}</p>
                    <div className='flex gap-x-2 items-center mb-2 mt-2'>
                        <span className=' text-yellow-25'>{avgReviewCount} </span>
                        <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                        <span className=' text-[15px]'> {`(${ratingAndReviews.length || 0} ratings)`}</span>
                        <span className='text-[15px]'>0{`${studentsEnrolled.length || 0} Students`}</span>
                    </div>

                    <div>
                        <p className=' font-semibold mb-3 text-[20px] mt-2'>Created by {`${instructor.firstName} ${instructor.lastName}`} </p>
                    </div>

                    <div className='flex gap-x-3 font-light '>
                        <div className='flex items-center gap-x-2'>
                            <IoIosInformationCircleOutline />
                            <p> Created At {formatDate(createdAt)} </p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <CiGlobe />
                            <p>
                                {" "} English
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            <div className='relative w-11/12 mx-auto'>
                <CourseDetailCard

                    course={courseData?.data?.courseDetails}
                    setConfirmationModal={setConfirmationModal}
                    handleBuyCourse={handleBuyCourse}
                />
            </div>

            <div className='flex flex-col p-10 w-11/12 mx-auto'>
                <div className='w-3/5 border border-richblack-600 p-5 rounded-md'>
                    <div>
                        <p className='text-3xl font-medium'>What You'll learn</p>
                        <p className='mt-2 text-richblack-300 mb-1'>{whatYouWillLearn} </p>
                    </div>
                </div>

                <div className=' text-3xl font-medium mt-16'>
                    <p>Course Content</p>
                </div>
                <div className='flex gap-x-2 mt-2 justify-between w-3/5'>
                    <div className='flex gap-x-3 text-richblack-300'>
                        <span>{courseContent.length}section(s)</span>
                        <span>
                            • {totalNoOfLectures} Lecture(s)
                        </span>
                        <span>
                            • {courseData?.data?.totalDuration} total length
                        </span>
                    </div>

                    <div>
                        <button
                            onClick={() => setIsActive([])}
                            className=' text-yellow-50'
                        >
                            Collapse all Section
                        </button>
                    </div>
                </div>
                <div className='w-11/12 mx-auto'>
                    <Accordian course={courseData?.data?.courseDetails?.courseContent} isActive={isActive} handleActive={handleActive} />

                </div>
                <div className='flex flex-col gap-y-2'>
                    <p className='mt-6 text-3xl font-semibold'>Author</p>
                    <div className='flex items-center gap-x-2 mt-2'>
                        <img
                            src={courseData?.data?.courseDetails?.thumbnail}

                            className='object-cover rounded-full w-[50px] h-[50px]'
                        />
                        <p className='text-[20px] font-semibold'>
                            {courseData?.data?.courseDetails?.instructor.firstName} {courseData?.data?.courseDetails?.instructor.lastName}
                        </p>
                    </div>
                </div>

                <div>
                    <p className=' flex flex-col items-center justify-center text-4xl font-semibold mt-20'>Reviews from other learners</p>
                    <div className='mt-10'>
                        <ReviewSlider />
                    </div>
                </div>
            </div>

            <Footer />

            {confirmationModal && <confirmationModal modalData={confirmation} />}
        </div>
    )
}

export default CourseDetails
