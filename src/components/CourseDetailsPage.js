import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">Course Details</h1>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Course ID: {id}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            This is where the detailed description of the course will be displayed. It could include the course's objectives, key topics, and learning outcomes.
          </p>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Instructor: John Doe</h3>
            <p className="text-gray-600 dark:text-gray-400">John Doe is an experienced software engineer with expertise in React and JavaScript. He has been teaching web development for over 5 years and has helped many students transition into successful tech careers.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Course Schedule</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Week 1: Introduction to React</li>
              <li>Week 2: React Components and Props</li>
              <li>Week 3: State and Lifecycle</li>
              <li>Week 4: Handling Events and Conditional Rendering</li>
              {/* Add more weeks as needed */}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Syllabus</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Overview of React and its ecosystem</li>
              <li>Setting up the development environment</li>
              <li>Building your first React application</li>
              <li>Understanding components, props, and state</li>
              <li>Advanced topics: Hooks, Context API, and performance optimization</li>
              {/* Add more syllabus items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
