import React from 'react';
import { Link } from 'react-router-dom';
import { selectActive, setActive } from '../store/slices/navBarSlice';
import { useDispatch, useSelector } from 'react-redux';

const Landing = () => {
  const dispatch = useDispatch();
  dispatch(setActive('home'));
  return <div>Landing Page</div>;
};

export default Landing;
