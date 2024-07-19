import React from 'react'
import CTAButton from './CTAButton'
import HighLightText from './HighlightText'
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock,
    backgroundGradient, codeColor
}) => {
    return (
        <div className={`group flex flex-col ${position} my-20 justify-between gap-10 md:flex-row`}>
            {/* section 1 */}
            <div className='w-full md:w-[50%] flex flex-col gap-8'>
                {heading}
                <div className='text-richblack-300 font-bold'>
                    {subheading}
                </div>

                <div className='flex items-center sm:flex-row gap-7 mt-7'>
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className='flex gap-2 items-center'>
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAButton>
                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div>

            {/* section 2 */}
            <div className='relative w-full md:w-[50%]'>
                <div className='absolute inset-0 h-[100%] flex flex-row text-[10px] w-[100%] py-4 lg:w-[500px] bg-richblack-800 blur-3xl'>
                </div>
                <div className='relative h-fit flex flex-row text-[10px] w-[100%] py-4 lg:w-[500px] bg-richblack-700 bg-opacity-10'>
                    <div className='text-center flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                    </div>

                    <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
                        <TypeAnimation
                            sequence={[codeblock, 2000, ""]}
                            repeat={Infinity}
                            omitDeletionAnimation={true}
                            style={{
                                whiteSpace: "pre-line",
                                display: "block"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeBlocks
