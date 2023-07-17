import React from 'react';
import { Link } from 'react-router-dom';
import { selectActive, setActive } from '../store/slices/navBarSlice';
import { useDispatch, useSelector } from 'react-redux';

const Appointments = () => {
  const dispatch = useDispatch();
  dispatch(setActive('appointments'));
  return <div>Appointments Page</div>;
};

export default Appointments;
