import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/Products/ProductLists';
import LoginPost from './components/Auth';
import HomeDisplay from './components/HomeHandler';

function App() {
  return (
    <div className='App'>
      <HomeDisplay />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<ProductList />} />
        <Route path='/Product:page' element={<ProductList />} />
        <Route path='/auth/login' element={<LoginPost />} />
      </Routes>
    </div>
  );
}

export default App;
