import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router-dom"

import CourseReviewModal from "../components/core/viewCourse/CourseReviewModal"
import VideoDetailsSidebar from "../components/core/viewCourse/VideoDetailsSidebar"
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI"
import {
    setCompletedLectures,
    setCourseSectionData,
    setEntireCourseData,
    setTotalNoOfLectures,
} from "../slice/viewCourseSlice"
import toast from "react-hot-toast"

export default function SeeCourse() {
    const { courseId } = useParams()
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [reviewModal, setReviewModal] = useState(false)

    // console.log("cid : ", courseId);
    // console.log("token : ", token);

    useEffect(() => {
        const fullDetails = async () => {
            try {
                const courseData = await getFullDetailsOfCourse(courseId, token)
                console.log("Course Data here... ", courseData.courseDetails)
                dispatch(setCourseSectionData(courseData.courseDetails.courseContent))
                dispatch(setEntireCourseData(courseData.courseDetails))
                dispatch(setCompletedLectures(courseData.completedVideos))
                let lectures = 0
                courseData?.courseDetails?.courseContent?.forEach((sec) => {
                    lectures += sec.subSection.length
                })

                if (!courseData) {
                    console.log("course data is empty")
                    toast.error("API SE KUCH NHI AAYA ");
                }
                dispatch(setTotalNoOfLectures(lectures))
            } catch (err) {
                console.log("full details of course cannot be fetched");
                toast.error("bhag bc");
            }
        }

        fullDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="relative flex min-h-[calc(100vh-3.5rem)] text-white">
                <VideoDetailsSidebar setReviewModal={setReviewModal} />
                <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
                    <div className="mx-6">
                        <Outlet />
                    </div>
                </div>
                {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
            </div>
        </>
    )
}
