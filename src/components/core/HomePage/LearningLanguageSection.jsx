import React from 'react'
import HighLightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from './CTAButton';

const LearningLanguageSection = () => {
    return (
        <div className='mt-[130px]'>
            <div className='flex flex-col gap-5 items-center'>
                <div className='text-4xl font-semibold text-center'>
                    Your Swiss knife for <HighLightText text={' learning any language '} />
                </div>

                <div className='text-center text-richblack-600 mx-auto text-base mt-3 font-medium w-[90%] md:w-[70%]'>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom
                    schedule and more.
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center mt-3 gap-5'>
                    <img
                        src={know_your_progress}
                        alt="knowYourprogress"
                        className=' object-contain md:w-1/3 lg:-mr-[100px]'
                    />
                    <img
                        src={compare_with_others}
                        alt="compareWithOthers"
                        className=' object-contain md:w-1/3'
                    />
                    <img
                        src={plan_your_lesson}
                        alt="planYourLesson"
                        className=' object-contain md:w-1/3 lg:-ml-[140px]'
                    />
                </div>

                <div className='w-fit mb-20'>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn More
                        </div>
                    </CTAButton>
                </div>

            </div>
        </div>
    )
}

export default LearningLanguageSection
