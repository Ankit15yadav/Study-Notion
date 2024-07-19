import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-stars"
import GetavgRating from "../../../utils/avgRating"
import { BiRupee } from "react-icons/bi";

const Course_Card = ({ course, height }) => {

    const [avgReviewCount, setAvgReviewCount] = useState(null);

    useEffect(() => {

        const count = GetavgRating(course?.ratingAndReviews || [])
        setAvgReviewCount(count);

    }, [course])

    console.log(course);


    // console.log("Avg review count ", avgReviewCount);

    return (
        <div className='text-white'>

            <Link to={`/course/${course._id}`}>

                <div className=''>
                    <div>
                        <img
                            src={course?.thumbnail}
                            alt='course thumbnail'
                            className={`${height} , w-full rounded-xl object-cover`}
                        />
                    </div>
                    <div className='flex flex-col mt-4 gap-y-2'>
                        <p className='font-bold text-2xl  hover:text-yellow-25'>{course?.courseName} </p>
                        <p className='font-bold  hover:text-yellow-25'>  {course?.instructor?.firstName} {course?.instructor?.lastName} </p>
                        <div className='flex gap-x-3  hover:text-yellow-25' >
                            <span>{avgReviewCount || 0}</span>
                            <ReactStars
                                count={5}
                                value={avgReviewCount > 0 ? avgReviewCount : 3}
                                size={20}
                                edit={false}
                                activeColor="ffd700"
                            />
                            <span > {course?.ratingAndReviews?.length} Ratings</span>
                        </div>
                        <p className='flex items-center text-2xl text-richblack-400'><BiRupee />{course?.price} </p>
                    </div>


                </div>

            </Link>

        </div >
    )
}

export default Course_Card
