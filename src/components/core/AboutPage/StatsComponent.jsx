import React from 'react'


const stats = [
    { count: "5K", label: "Active Students" },
    { count: "10+", label: "Mentors" },
    { count: "200+", label: "Courses" },
    { count: "50+", label: "Awards" },
]

const StatsComponent = () => {
    return (
        <section className=' w-full bg-richblack-600' >
            <div>
                <div className='flex gap-x-4'>
                    {
                        stats.map((data, index) => (
                            <div key={index}>
                                <h1>
                                    {data.count};
                                </h1>
                                <h2>
                                    {data.label}
                                </h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default StatsComponent
