import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import UpdateNote from './UpdateNote';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='app' element={<App />} />
      <Route path='update/:noteID' element={<UpdateNote />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

