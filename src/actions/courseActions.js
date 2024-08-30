export const toggleCourseCompletion = (courseId) => {
    return {
      type: 'TOGGLE_COURSE_COMPLETION',
      payload: courseId,
    };
  };
  