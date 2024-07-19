import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighLightText from './HighlightText'
import CTAButton from './CTAButton'
import { FaArrowRight } from "react-icons/fa6";

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-col lg:flex-row gap-10 items-center'>
        <div className='w-full lg:w-1/2'>
          <img src={Instructor} className='shadow-[-10px_-10px_4px_white'></img>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-5'>
          <div className='text-4xl font-semibold w-full'>
            Become an <HighLightText text={" Instructor "} />
          </div>
          <p className='font-medium text-lg lg:text-base w-full text-richblack-300'>
            Instructors from around the world teach millions of students on StudyNotion.
            We provide the tools and skills to teach what you love.
          </p>
          <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
              <div className='flex gap-2 items-center text-lg lg:text-base font-medium'>
                Start Teaching Today <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorSection
