import React from 'react';
import MainLayout from './Layouts/MainLayout';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './Pages/Home';


const App = () => {
  return (

    <>
      <MainLayout>

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

      </MainLayout>
    </>
    
  )
}

export default App