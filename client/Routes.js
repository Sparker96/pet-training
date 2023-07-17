import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Landing, About, Appointments, Contact } from './pages';

const Router = ({}) => {
  return (
    <Routes>
      <Route path='/appointments' element={<Appointments />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Landing />} />
    </Routes>
  );
};

export default Router;
