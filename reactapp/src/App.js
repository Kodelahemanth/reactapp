import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Navbar from './Navbar';
import HomePage from './components/HomePage';
import Details from './components/Details';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    
   
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path="/Homepage"element={<Navbar/>}/>
      </Routes>
      
    </BrowserRouter>
   
    </div>
  )
}

export default App
