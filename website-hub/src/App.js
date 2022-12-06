import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/hub-page.css'
import Title from './components/title.js'
import Navbar from './components/navbar.js'
import {Routes, Route} from 'react-router-dom';

import Sanjeev from './users-apps/Sanjeevs React Website/new-app1/src/App.js'
import Ana from './users-apps/Ana React Website/hw5/src/App.js'
import Apurva from './users-apps/Apurva React Website/HW5/src/App.js'
import Gelilas from './users-apps/Gelilas React App/hw6_app/src/App.js'
import Hanocks from './users-apps/Hanocks React Website/app/src/App.js'
import Anirudh from './users-apps/hw5_anirudh/about-me/src/App.js'
import Jillian from './users-apps/Jillians React Website/hw6-app/src/App.js'
import Richard from './users-apps/Richards React Website/about/src/App.js'
import Sathya from './users-apps/Sathyas React Website/my-app/src/App.js'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Title />} />
        <Route path='/sanjeev' element={<Sanjeev />} />
        <Route path='/ana' element={<Ana />} />
        <Route path='/apurva' element={<Apurva />} />
        <Route path='/gelilas' element={<Gelilas />} />
        <Route path='/hanock' element={<Hanocks />} />
        <Route path='/anirudh' element={<Anirudh />} />
        <Route path='/jillian' element={<Jillian />} />
        <Route path='/richard' element={<Richard />} />
        <Route path='/sathya' element={<Sathya />} />
      </Routes>
    </>
  );
}