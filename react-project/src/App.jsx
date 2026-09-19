import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ProductProvider from './context/ProductContext'


const App = () => {

  return (
    <>
      <ProductProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ProductProvider>
    </>
  )
}

export default App

