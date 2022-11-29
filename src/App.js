import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Place from './Pages/Place';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/place' element={<Place/>} />
      </Routes>
    </div>
  )
}

export default App