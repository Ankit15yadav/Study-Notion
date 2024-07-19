import React, { useState } from 'react'
import HighLightText from './HighlightText';
import { HomePageExplore } from "../../../data/homepage-explore"
import CourseCard from './CourseCard';

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
]

const ExploreMore = () => {

  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  }

  return (
    <div className='mt-16'>
      <div className='text-4xl font-semibold text-center'>
        Unlock the
        <HighLightText text={" Power of Code"} />
      </div>
      <p className='text-center text-richblack-300 text-[18px] mt-3'>
        Learn to Build Anything You Can Imagine
      </p>

      <div className='flex flex-wrap justify-center items-center rounded-full bg-richblack-800 mb-5 border-richblack-100 mt-6 px-1 py-1'>
        {
          tabsName.map((element, index) => {
            return (
              <div
                className={`text-[12px] sm:text-[16px] flex items-center gap-1
                                ${currentTab === element ? "bg-richblack-900 text-richblack-5 font-medium" :
                    "text-richblack-200"
                  } rounded-full transition-all duration-200 cursor-pointer 
                                    hover:bg-richblack-900 hover:text-richblack-25 px-4 py-2 sm:px-6 sm:py-2`}
                key={index}
                onClick={() => {
                  setMyCards(element)
                }}>
                {element}
              </div>
            )
          })
        }
      </div>

      <div className='lg:h-[150px]'>
        <div className='flex flex-wrap justify-center gap-4 lg:gap-8 mx-auto'>
          {
            courses.map((element, index) => {
              return (
                <CourseCard
                  key={index}
                  cardData={element}
                  currentCard={currentCard}
                  setCurrentCard={setCurrentCard} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default ExploreMore
