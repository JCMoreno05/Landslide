import './App.scss';
import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import Home from './pages/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
