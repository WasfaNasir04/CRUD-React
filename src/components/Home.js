import React from 'react';
import CourseList from './CourseList';

const Home = () => {
  return (
    <div>
      <h2>Course List</h2>
      <CourseList editable={false} />
    </div>
  );
};

export default Home;
