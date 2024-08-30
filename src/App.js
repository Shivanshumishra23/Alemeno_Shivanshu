import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar component
import CourseListingPage from './components/CourseListingPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import StudentDashboard from './components/StudentDashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> {/* Use Navbar component */}

          <Routes>
            <Route path="/" element={<CourseListingPage />} />
            <Route path="/course/:id" element={<CourseDetailsPage />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
