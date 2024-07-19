import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Thead, Tbody, Tr, Td, Th, Tc } from 'react-super-responsive-table';
import { COURSE_STATUS } from '../../../../utils/constants';
import ConfirmationModal from '../../../common/ConfirmationModal';
import { deleteCourse, fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../slice/courseSlice';
import { useNavigate } from 'react-router-dom';
import { IoMdTime } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { formatDate } from '../../../../services/formatDate';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

const CoursesTable = ({ courses, setCourses }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmationModal] = useState(null);
    const LENGTH = 30;

    const handleCourseDelete = async (courseId) => {
        setLoading(true);

        await deleteCourse({ courseId: courseId }, token);
        const result = await fetchInstructorCourses(token);
        if (result) {
            setCourses(result);
        }

        setConfirmationModal(null);
        setLoading(false);
    }

    return (
        <>
            <Table className="rounded-xl border border-richblack-800 mt-4">
                <Thead>
                    <Tr className="flex gap-x-10 rounded-t-md borderb border-b-richblack-800  px-6 py-2">
                        <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
                            COURSE
                        </Th>
                        <Th className="text-left text-sm font-medium uppercase text-richblack-100">
                            DURATION
                        </Th>
                        <Th className="text-left text-sm font-medium uppercase text-richblack-100">
                            PRICE
                        </Th>
                        <Th className="text-left text-sm font-medium uppercase text-richblack-100">
                            ACTIONS
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        courses.length === 0 ?
                            (<Tr>
                                <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                                    No Courses Found
                                </Td>
                            </Tr>)
                            :
                            (
                                courses?.map((course) => (
                                    <Tr key={course._id} className="flex gap-x-10 border-b border-richblack-800 py-8 px-6">
                                        <Td className=" flex flex-1 gap-x-4">
                                            <img
                                                src={course?.thumbnail}
                                                className='h-[148px] w-[220px] rounded-lg object-cover'
                                            />
                                            <div className='flex flex-col justify-between'>
                                                <p className='text-lg font-semibold text-richblack-5'>{course.courseName}</p>
                                                <p className='text-xs text-richblack-300'> {

                                                    course.courseDescription.split(" ").length > LENGTH ?
                                                        course.courseDescription.split(" ").slice(0, 30).join(" ") + "..." : course.courseDescription
                                                }
                                                </p>
                                                <p className='text-[12px] text-white'>Created : {formatDate(course.createdAt)} </p>
                                                {
                                                    course.status === COURSE_STATUS.DRAFT ?
                                                        (<p className='text-pink-50 p-1.5 rounded-xl w-fit bg-richblack-700 flex items-center gap-x-2'> <IoMdTime size={20} /> Drafted</p>) : (<p className='text-yellow-50 p-1.5 w-fit rounded-xl bg-richblack-700 flex items-center gap-x-2'>
                                                            <SiTicktick size={14} /> Published</p>)
                                                }
                                            </div>
                                        </Td>

                                        <Td className="text-sm font-medium text-richblack-100">
                                            2h 30m
                                        </Td>

                                        <Td className="text-sm font-medium text-richblack-100">
                                            <div className="flex  items-center">
                                                <BiRupee /> {course.price}
                                            </div>
                                        </Td>
                                        <Td className="text-sm font-medium text-richblack-100">
                                            <button
                                                disabled={loading}
                                                onClick={() => {
                                                    navigate(`/dashboard/edit-course/${course._id}`)
                                                }}
                                                className='px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300'
                                            >
                                                <MdEdit size={20} />
                                            </button>

                                            <button
                                                disabled={loading}
                                                onClick={() => {
                                                    setConfirmationModal({
                                                        text1: "Do you want to delet this course",
                                                        text2: "All the data related to this course will be deleted",
                                                        btn1Text: "Delete",
                                                        btn2Text: "Cancel",
                                                        btn1Handler: !loading ? () => handleCourseDelete(course._id) : () => { },
                                                        btn2Handler: !loading ? () => setConfirmationModal(null) : () => { }
                                                    })
                                                }}
                                                className='transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-200'

                                            >
                                                <MdDelete size={20} />
                                            </button>
                                        </Td>
                                    </Tr>
                                ))
                            )
                    }
                </Tbody>

            </Table>
            {
                confirmation && <ConfirmationModal modalData={confirmation} />
            }
        </>
    )
}

export default CoursesTable
