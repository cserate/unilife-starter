import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';



function App() {
// // const [email,setEmail]=useState('')


// // const handleSubmit=(e)=>{
// //   e.preventDefault()
// //   console.log(email)
// }

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
