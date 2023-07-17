import React from 'react';
import { Link } from 'react-router-dom';
import { selectActive, setActive } from '../store/slices/navBarSlice';
import { useDispatch, useSelector } from 'react-redux';

const About = () => {
  const dispatch = useDispatch();
  dispatch(setActive('about'));
  return <div>About Page</div>;
};

export default About;
