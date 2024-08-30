import reactimg from "../asset/reactimg.jpg"
import javascriptimg from "../asset/javascriptimg.jpg"
const initialState = {
    enrolledCourses: [
      {
        id: 1,
        name: 'Introduction to React',
        instructor: 'John Doe',
        thumbnail: reactimg,
        dueDate: '2024-09-01',
        progress: 75,
        completed: false,
      },
      {
        id: 2,
        name: 'Advanced JavaScript',
        instructor: 'Jane Smith',
        thumbnail: javascriptimg,
        dueDate: '2024-09-10',
        progress: 40,
        completed: false,
      },
      // Additional courses...
    ],
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_COURSE_COMPLETION':
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map(course =>
            course.id === action.payload
              ? { ...course, completed: !course.completed }
              : course
          ),
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  