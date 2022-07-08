import './App.css';

import React, { useEffect, useState } from 'react';

import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Details from './pages/Details';
import NotFound from './pages/Notfound';


function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />  } />
          
          <Route
            path="/book/:id"
            element={ <Details />}
          />
        <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
