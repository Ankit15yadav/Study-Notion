import React from 'react'

const HighLightText = ({ text }) => {
    return (
        <span className='bg-gradient-to-b from-richblue-400 via-caribbeangreen-25 to-richblue-500 bg-clip-text text-transparent font-bold '>
            {text}
        </span>
    )
}

export default HighLightText
