import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/Notfound';


function App() {
 
  return (


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
   
  );
}

export default App;
