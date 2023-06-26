import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages';

const Router = ({}) => {
  return (
    <Routes>
      <Route path='*' element={<Landing />} />
    </Routes>
  );
};

export default Router;
