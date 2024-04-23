import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/landing_page/home';
import SignIn from './signup';

const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} >
        <Route  path="home/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default Router;
