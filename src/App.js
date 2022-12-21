import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
