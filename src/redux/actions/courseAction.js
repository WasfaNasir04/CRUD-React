export const addCourse = (course) => ({
  type: 'ADD_COURSE',
  payload: course,
});

export const updateCourse = (course) => ({
  type: 'UPDATE_COURSE',
  payload: course,
});

export const deleteCourse = (courseId) => ({
  type: 'DELETE_COURSE',
  payload: courseId,
});
