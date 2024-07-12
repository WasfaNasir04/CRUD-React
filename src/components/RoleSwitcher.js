import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../redux/actions/authActions';

const RoleSwitcher = () => {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.auth.user.role);

  const handleRoleChange = (e) => {
    dispatch(setRole(e.target.value));
  };

  return (
    <div className="mb-3">
      <label>Current Role: {userRole}</label>
      <select className="form-control" value={userRole} onChange={handleRoleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;
