// src/services/courseService.js

const COURSE_KEY = "courses";

// Get all courses
export const getCourses = () => {
  const courses = localStorage.getItem(COURSE_KEY);
  return courses ? JSON.parse(courses) : [];
};

// Add new course
export const addCourse = (newCourse) => {
  const courses = getCourses();
  const updatedCourses = [...courses, newCourse];
  localStorage.setItem(COURSE_KEY, JSON.stringify(updatedCourses));
};

// Get course by ID
export const getCourseById = (id) => {
  const courses = getCourses();
  return courses.find(course => course.id === id);
};

// Delete course
export const deleteCourse = (id) => {
  const courses = getCourses();
  const updatedCourses = courses.filter(course => course.id !== id);
  localStorage.setItem(COURSE_KEY, JSON.stringify(updatedCourses));
};
