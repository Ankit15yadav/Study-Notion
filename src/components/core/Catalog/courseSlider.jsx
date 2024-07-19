import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import ReactStars from "react-stars"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { FreeMode, Pagination, Autoplay } from "swiper/modules"
import { BiRupee } from "react-icons/bi"

// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import Course_Card from "./Course_Card"

function Course_Slider({ Courses }) {
    return (
        <>
            {Courses?.length ? (
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="max-h-[30rem]"
                >
                    {Courses?.map((course, i) => (
                        <div>
                            <SwiperSlide key={i}>
                                <Course_Card course={course} height={"h-[250px]"} />
                            </SwiperSlide>
                        </div>
                    ))}


                </Swiper>


            ) : (
                <p className="text-xl text-richblack-5">No Course Found</p>
            )}
        </>
    )
}

export default Course_Slider
