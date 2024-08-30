// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { database } from '../firebase';
// import { ref, onValue, increment, update } from 'firebase/database';

// const CourseListingPage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const coursesRef = ref(database, 'courses');
//     onValue(coursesRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const courseList = Object.values(data);
//         setCourses(courseList);
//       }
//     });
//   }, []);

//   const handleLike = (courseId) => {
//     const courseRef = ref(database, `courses/${courseId}`);
//     update(courseRef, {
//       likes: increment(1),
//     });
//   };

//   return (
//     <div className="container mx-auto p-6 text-gray-900 dark:text-gray-100">
//       <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">Course Listing</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {courses.map(course => (
//           <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{course.name}</h2>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">Instructor: {course.instructor}</p>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">Likes: {course.likes}</p>
//               <button
//                 onClick={() => handleLike(course.id)}
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
//               >
//                 Like
//               </button>
//               <Link to={`/course/${course.id}`} className="block mt-4 text-blue-500 hover:underline">
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseListingPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../firebase';
import { ref, onValue, increment, update } from 'firebase/database';

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const coursesRef = ref(database, 'courses');
    onValue(coursesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const courseList = Object.values(data);
        setCourses(courseList);
      }
      setLoading(false); // Data is loaded, so set loading to false
    });
  }, []);

  const handleLike = (courseId) => {
    const courseRef = ref(database, `courses/${courseId}`);
    update(courseRef, {
      likes: increment(1),
    });
  };

  return (
    <div className="container mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">Course Listing</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{course.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Instructor: {course.instructor}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Likes: {course.likes}</p>
                <button
                  onClick={() => handleLike(course.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Like
                </button>
                <Link to={`/course/${course.id}`} className="block mt-4 text-blue-500 hover:underline">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseListingPage;
