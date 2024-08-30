
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCourseCompletion } from '../actions/courseActions';

const StudentDashboard = () => {
  const courses = useSelector(state => state.courses.enrolledCourses);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <ImageWithLoader src={course.thumbnail} alt={course.name} />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{course.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Instructor: {course.instructor}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Due Date: {course.dueDate}</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-600">
                  <div style={{ width: `${course.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 dark:bg-blue-400"></div>
                </div>
              </div>
              <button
                onClick={() => dispatch(toggleCourseCompletion(course.id))}
                className={`w-full py-2 mt-4 rounded-lg font-semibold text-white transform transition-colors duration-300 ${
                  course.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {course.completed ? 'Completed' : 'Mark as Completed'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageWithLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-700">
          <div className="loader"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={`w-full h-40 object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default StudentDashboard;

