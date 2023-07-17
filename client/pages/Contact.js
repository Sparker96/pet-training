import React from 'react';
import { Link } from 'react-router-dom';
import { selectActive, setActive } from '../store/slices/navBarSlice';
import { useDispatch, useSelector } from 'react-redux';

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(setActive('contact'));
  return <div>Contact Page</div>;
};

export default Contact;
