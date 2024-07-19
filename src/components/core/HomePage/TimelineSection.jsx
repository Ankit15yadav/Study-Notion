import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineimage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        logo: logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company"
    },
    {
        logo: logo2,
        heading: "Responsibility",
        Description: "Fully committed to the success company"
    },
    {
        logo: logo3,
        heading: "Flexibility",
        Description: "Fully committed to the success company"
    },
    {
        logo: logo4,
        heading: "Solve the problem",
        Description: "Fully committed to the success company"
    },
]

const TimelineSection = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-15 items-center'>
            {/* left part */}
            <div className='w-full lg:w-[45%] flex flex-col gap-5'>
                {
                    timeline.map((element, index) => {
                        return (
                            <div key={index}>
                                <div className='flex flex-row gap-6'>
                                    <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full'>
                                        <img src={element.logo} alt={`${element.heading} logo`} />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                        <p className='text-base'>{element.Description}</p>
                                    </div>
                                </div>
                                {
                                    index !== timeline.length - 1 && // Check if not the last element
                                    <div>
                                        <div className='lg:h-[25px] lg:w-[2px] text-richblack-400 ml-6 mt-4 border-r-2 border-dotted'></div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            {/* right part */}
            <div className='relative shadow-blue-200 mt-10 lg:mt-0'>
                <img src={timelineimage} alt='timelineimage' className='shadow-white object-cover h-fit' />
                <div className='absolute bg-caribbeangreen-700 flex flex-col sm:flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] -bottom-10'>
                    <div className='flex flex-row gap-5 items-center justify-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                    </div>
                    <div className='flex gap-5 items-center px-7 mt-4 sm:mt-0'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm'>Type of Courses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineSection