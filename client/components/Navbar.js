import React from 'react';
import { Link } from 'react-router-dom';
import { selectActive, setActive } from '../store/slices/navBarSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const isActive = useSelector(selectActive);

  return (
    <div className='topnav'>
      <h1>Pet Training 🐶 🦴</h1>
      <Link to='/contact' className={`${isActive.contact}`}>
        Contact
      </Link>
      <Link to='/about' className={`${isActive.about}`}>
        About
      </Link>
      <Link to='/appointments' className={`${isActive.appointments}`}>
        Appointments
      </Link>
      <Link to='/home' className={`${isActive.home}`}>
        Home
      </Link>
    </div>
  );
};

export default Navbar;
