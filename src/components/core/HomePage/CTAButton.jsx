import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({ children, active, linkto }) => {
    return (
        <Link to={linkto}>
            <div className={` w-fit text-center text-[11px] sm:text-[12px] px-3 sm:px-5 py-2 sm:py-2 rounded-md font-bold
                ${active ? "bg-yellow-50 text-black shadow-[2px_2px_7px_white]" : "bg-richblack-800 shadow-[2px_2px_5px_yellow]"}
                hover:scale-95 transition-all duration-200
                `}>
                {children}
            </div>
        </Link>
    )
}

export default CTAButton
