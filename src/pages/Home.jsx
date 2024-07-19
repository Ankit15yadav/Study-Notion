// import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import HighLightText from '../components/core/HomePage/HighLightText';
// import CTAButton from '../components/core/HomePage/CTAButton';
// import Banner from "../assets/Images/banner.mp4"
// import CodeBlocks from '../components/core/HomePage/CodeBlocks';
// import TimelineSection from '../components/core/HomePage/TimelineSection';
// import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
// import InstructorSection from '../components/core/HomePage/InstructorSection';
// import ExploreMore from '../components/core/HomePage/ExploreMore';

// const Home = () => {
//     return (
//         <div>
//             {/* Section 1 */}

//             <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
//              text-white  '>

//                 <Link to={"/signup"}>

//                     <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblue-800
//                      font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit shadow-[0px_2px_2px_white]
//                      '>
//                         {/* ye shadow kaafi useful hai */}
//                         <div className='flex flex-row items-center gap-2 rounded-full px-4 py-[5px] 
//                          transition-all duration-200 group-hover:bg-richblack-900'>
//                             <p>Become an Instructor</p>
//                             <FaArrowRight />
//                         </div>

//                     </div>

//                 </Link>

//                 <div className='text-center text-4xl font-semibold mt-7 items-center'>
//                     Empower Your Future with
//                     <HighLightText text={" Coding Skills"} />
//                 </div>

//                 <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
//                     With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a

//                     wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
//                 </div>

//                 <div className='flex flex-row gap-7 mt-8'>
//                     <CTAButton active={true} linkto={"/singup"}>
//                         Learn More
//                     </CTAButton>
//                     <CTAButton active={false} linkto={"/login"}>
//                         Book a Demo
//                     </CTAButton>
//                 </div>

//                 <div className=' mx-3 my-12  w-[80%] shadow-[-10px_10px_40px_white] rounded-3xl'>
//                     <video muted
//                         loop
//                         autoPlay
//                         className='rounded-3xl'
//                     >
//                         <source src={Banner} type='video/mp4'></source>
//                     </video>
//                 </div>

//                 {/* code section 1 */}
//                 <div>
//                     <CodeBlocks
//                         position={"lg:flex-row"}
//                         heading={
//                             <div className='text-4xl font-semibold'>
//                                 Unlock your
//                                 <HighLightText text={" coding potential "} />
//                                 with our online courses.
//                             </div>
//                         }
//                         subheading={
//                             <div>
//                                 Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
//                             </div>
//                         }
//                         ctabtn1={
//                             {
//                                 btnText: "Try it yourself",
//                                 linkto: "/singup",
//                                 active: true,
//                             }
//                         }
//                         ctabtn2={
//                             {
//                                 btnText: "learn more",
//                                 linkto: "/login",
//                                 active: false,
//                             }
//                         }

//                         codeblock={`<!DOCTYPE html>
// <html>
// <head><title>Example</title>
// <link rel="stylesheet"href="styles.css">
// </head>
// <body>
// <h1><ahref="/">Header</a>
// </h1>
// <nav><a href="/one">One</a><a href="/two">Two</a>
// <a href="/three">Three</a>
// </nav>
// `}
//                         codeColor={'text-caribbeangreen-25'}
//                     />
//                 </div>
//                 {/* code section 2 */}
//                 <div>
//                     <CodeBlocks
//                         position={"lg:flex-row-reverse"}
//                         heading={
//                             <div className='text-4xl font-semibold'>
//                                 Start
//                                 <HighLightText text={" coding in seconds "} />
//                             </div>
//                         }
//                         subheading={
//                             <div>
//                                 Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
//                             </div>
//                         }
//                         ctabtn1={
//                             {
//                                 btnText: "Continue Lesson",
//                                 linkto: "/singup",
//                                 active: true,
//                             }
//                         }
//                         ctabtn2={
//                             {
//                                 btnText: "learn more",
//                                 linkto: "/login",
//                                 active: false,
//                             }
//                         }

//                         codeblock={`<!DOCTYPE html>
// <html>
// <head><title>Example</title>
// <link rel="stylesheet"href="styles.css">
// </head>
// <body>
// <h1><ahref="/">Header</a>
// </h1>
// <nav><a href="/one">One</a><a href="/two">Two</a>
// <a href="/three">Three</a>
// </nav>
// `}
//                         codeColor={"text-yellow-25"}
//                     />
//                 </div>

//                 <ExploreMore />

//             </div>

//             {/* Section 2 */}
//             <div className=' bg-pure-greys-5 text-richblack-700 '>
//                 <div className='homepage_bg h-[350px] '>

//                     <div className='w-11/12 max-w-maxContent flex justify-center items-center
//                      mx-auto'>

//                         <div className='flex gap-7 mt-[175px] text-white '>
//                             <CTAButton active={true} linkto={"/signup"} >
//                                 <div className='flex items-center gap-2 '>
//                                     Explore full catalog
//                                     <FaArrowRight />
//                                 </div>
//                             </CTAButton>

//                             <CTAButton active={false} linkto={"/login"}>
//                                 Learn More
//                             </CTAButton>

//                         </div>

//                     </div>


//                 </div>

//                 <div className='mx-auto w-11/12 max-w-maxContent flex
//                 flex-col items-center justify-center gap-7'>

//                     <div className=' flex flex-row gap-24 mb-10 mt-[95px]'>
//                         <div className='text-4xl font font-semibold w-[45%]'>
//                             Get the skills you need for a
//                             <HighLightText text={" job that is in demand "} />
//                         </div>
//                         {/* item start vala yaad nhi tha */}
//                         <div className='flex flex-col gap-10 w-[40%] items-start'>
//                             <div className='text-[16px]'>
//                                 The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
//                             </div>
//                             <CTAButton active={true} linkto={"/signup"}>
//                                 <div>
//                                     Learn more
//                                 </div>
//                             </CTAButton>
//                         </div>
//                     </div>

//                     <TimelineSection />

//                     <LearningLanguageSection />

//                 </div>



//             </div>

//             {/* Section 3 */}
//             <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center
//              justify-between gap-8  bg-richblack-900 text-white'>

//                 <InstructorSection />

//                 <h2 className='text-center text-4xl font-semibold mt-10'>
//                     Reviews from other learners
//                 </h2>

//                 {/* review slider here */}
//             </div>
//             {/* Footer */}
//         </div>
//     )
// }

// export default Home

import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HighLightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/CTAButton';
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from '../components/common/Footer';
import ReviewSlider from '../components/common/ReviewSlider';

const Home = () => {
    return (
        <div>
            {/* Section 1 */}
            <div className='relative mx-auto flex flex-col w-11/12 max-w-screen-xl items-center text-white'>

                <Link to={"/signup"}>
                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblue-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit shadow-[0px_2px_2px_white]'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-4 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='text-center text-4xl font-semibold mt-7 items-center'>
                    Empower Your Future with
                    <HighLightText text={" Coding Skills"} />
                </div>

                <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className='flex sm:flex-row md:flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className='mx-3 my-12 w-full sm:w-[80%] shadow-[-10px_10px_40px_white] rounded-3xl'>
                    <video muted loop autoPlay className='rounded-3xl w-full'>
                        <source src={Banner} type='video/mp4'></source>
                    </video>
                </div>

                {/* code section 1 */}
                <div>
                    <CodeBlocks
                        position={"flex flex-col lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock your
                                <HighLightText text={" coding potential "} />
                                with our online courses.
                            </div>
                        }
                        subheading={
                            <div>
                                Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                            </div>
                        }
                        ctabtn1={{
                            btnText: "Try it yourself",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "learn more",
                            linkto: "/login",
                            active: false,
                        }}
                        codeblock={`<!DOCTYPE html>
<html>
<head><title>Example</title>
<link rel="stylesheet"href="styles.css">
</head>
<body>
<h1><a href="/">Header</a></h1>
<nav><a href="/one">One</a><a href="/two">Two</a><a href="/three">Three</a></nav>
`}
                        codeColor={'text-caribbeangreen-25'}
                    />
                </div>
                {/* code section 2 */}
                <div>
                    <CodeBlocks
                        position={"flex flex-col lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Start
                                <HighLightText text={" coding in seconds "} />
                            </div>
                        }
                        subheading={
                            <div>
                                Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
                            </div>
                        }
                        ctabtn1={{
                            btnText: "Continue Lesson",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "learn more",
                            linkto: "/login",
                            active: false,
                        }}
                        codeblock={`<!DOCTYPE html>
<html>
<head><title>Example</title>
<link rel="stylesheet"href="styles.css">
</head>
<body>
<h1><a href="/">Header</a></h1>
<nav><a href="/one">One</a><a href="/two">Two</a><a href="/three">Three</a></nav>
`}
                        codeColor={"text-yellow-25"}
                    />
                </div>

                <ExploreMore />

            </div>

            {/* Section 2 */}
            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[350px] flex items-center justify-center'>
                    <div className='w-11/12 max-w-screen-xl flex flex-col sm:flex-row md:flex-row gap-7 mt-[175px] text-white items-center justify-center'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-2'>
                                Explore full catalog
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/login"}>
                            Learn More
                        </CTAButton>
                    </div>
                </div>


                <div className='mx-auto w-11/12 max-w-screen-xl flex flex-col items-center justify-center gap-7'>
                    <div className='flex flex-col lg:flex-row gap-24 mb-10 mt-[95px]'>
                        <div className='text-4xl font-semibold w-full lg:w-[45%]'>
                            Get the skills you need for a
                            <HighLightText text={" job that is in demand "} />
                        </div>
                        <div className='flex flex-col gap-10 w-full lg:w-[40%] items-start'>
                            <div className='text-[16px] '>
                                The modern StudyNotion dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>
                    </div>

                    <TimelineSection />

                    <LearningLanguageSection />

                </div>
            </div>

            {/* Section 3 */}
            <div className='w-11/12 mx-auto max-w-screen-xl flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
                <InstructorSection />

                <h2 className='text-center text-4xl font-semibold mt-10 mb-6'>
                    Reviews from other learners
                </h2>

                {/* review slider here */}
                <div className='mb-6'>
                    <ReviewSlider />
                </div>
            </div>

            {/* Footer */}
            <div className='w-full'>
                <Footer />

            </div>
        </div>
    )
}

export default Home

