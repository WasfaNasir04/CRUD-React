import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, updateCourse } from '../redux/actions/courseAction';

const CourseForm = ({ currentId, setCurrentId }) => {
  const [courseData, setCourseData] = useState({ name: '' });
  const course = useSelector((state) =>
    currentId ? state.courses.find((c) => c.id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (course) setCourseData(course);
  }, [course]);

  const clear = () => {
    setCurrentId(null);
    setCourseData({ name: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateCourse(courseData));
    } else {
      dispatch(addCourse(courseData));
    }
    clear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Course Name</label>
        <input
          type="text"
          className="form-control"
          value={courseData.name}
          onChange={(e) => setCourseData({ ...courseData, name: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {currentId ? 'Update' : 'Add'}
      </button>
      <button type="button" className="btn btn-secondary ml-2" onClick={clear}>
        Clear
      </button>
    </form>
  );
};

export default CourseForm;
