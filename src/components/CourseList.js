import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse } from '../redux/actions/courseAction';

const CourseList = ({ editable, setCurrentId }) => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  };

  return (
    <div>
      <h3>Courses</h3>
      <ul className="list-group">
        {courses.map((course) => (
          <li key={course.id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <span>{course.name}</span>
              {editable && (
                <div>
                  <button
                    className="btn btn-primary btn-sm mr-2"
                    onClick={() => setCurrentId(course.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(course.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
