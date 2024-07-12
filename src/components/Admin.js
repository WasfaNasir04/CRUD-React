import React, { useState } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';

const Admin = () => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <CourseForm currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="col-md-8">
          <CourseList editable={true} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
