import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineDown } from "react-icons/ai"

import CourseSubSectionAccordion from './CourseSubSectionAccordion';

const Accordian = ({ course, isActive, handleActive }) => {
    // const [activeIndex, setActiveIndex] = useState(null);
    const contentEl = useRef(null)

    // Accordian state
    const [active, setActive] = useState(false)
    useEffect(() => {
        setActive(isActive?.includes(course._id))
    }, [isActive])
    const [sectionHeight, setSectionHeight] = useState(0)
    useEffect(() => {
        setSectionHeight(active ? contentEl.current.scrollHeight : 0)
    }, [active])

    return (
        <div className="overflow-hidden w-[380px] border border-solid border-richblack-600 bg-richblack-700 text-richblack-5 last:mb-0">
            hello
        </div>
    )
};

export default Accordian;
