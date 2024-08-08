import React from 'react'

const CourseCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer">
    <img src="/path/to/image.jpg" alt="Course Thumbnail" className="w-full h-40 object-cover rounded-t-lg"/>
    <h3 className="text-xl font-semibold mt-4">Tutorial Title</h3>
    <p className="text-gray-600 mt-2">A brief description of the tutorial to entice users.</p>
    <a href="/course-link" className="text-blue-500 hover:underline mt-4 block">Learn More</a>
  </div>
  )
}

export default CourseCard