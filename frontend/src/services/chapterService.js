// src/services/chapterService.js

const CHAPTER_KEY = "chapters";

// Get all chapters for a course
export const getChaptersByCourseId = (courseId) => {
  const chapters = JSON.parse(localStorage.getItem(CHAPTER_KEY)) || [];
  return chapters.filter(chap => chap.courseId === courseId);
};

// Add new chapter
export const addChapter = (newChapter) => {
  const chapters = JSON.parse(localStorage.getItem(CHAPTER_KEY)) || [];
  const updated = [...chapters, newChapter];
  localStorage.setItem(CHAPTER_KEY, JSON.stringify(updated));
};

// Delete chapter
export const deleteChapter = (id) => {
  const chapters = JSON.parse(localStorage.getItem(CHAPTER_KEY)) || [];
  const updated = chapters.filter(chap => chap.id !== id);
  localStorage.setItem(CHAPTER_KEY, JSON.stringify(updated));
};
