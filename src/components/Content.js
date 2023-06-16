import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import Reader from './_features/Reader/Reader'
import User from './Sidebar/Pages/User';

function Content() {
  return (
    <div className="Content h-screen
    sm:px-8 sm:py-4 
    md:pl-8 md:mr-64
    lg:ml-64
    ">
      <Reader />
      <Routes>
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  )
}

export default Content