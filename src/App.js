import React from 'react';
import { Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import Partners from './pages/Partners/Partners';
import Contacts from './pages/Contacts/Contacts';
import Careers from './pages/Careers/Careers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';




function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Header />
      <Routes>
        <Route path="partners" element={<Partners />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="careers" element={<Careers />} />
      </Routes>
      
    </div>
  );
}

export default App;
