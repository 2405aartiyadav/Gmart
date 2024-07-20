import React, { useState } from 'react'
import Footer from './Components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header.jsx';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster position='top-right' />
    </>
 )
}

export default App;
