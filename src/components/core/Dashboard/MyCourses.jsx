import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';
import IconBtn from '../../common/IconBtn';
import CoursesTable from './InstructorCourses/CoursesTable';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"


const MyCourses = () => {

    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {

        const fetchCourses = async () => {
            const result = await fetchInstructorCourses(token);
            if (result) {
                setCourses(result);
            }
        }

        fetchCourses();

    }, [])

    return (
        <div className='text-white'>
            <div className='flex justify-between items-center'>
                <h1 className=' text-2xl text-richblack-400'>My Courses</h1>
                <IconBtn
                    text="Add Course"
                    onclick={() => navigate("/dashboard/add-course")}
                //icon add krna hai
                />
            </div>

            {
                courses && <CoursesTable courses={courses} setCourses={setCourses} />
            }
        </div>
    )
}

export default MyCourses
