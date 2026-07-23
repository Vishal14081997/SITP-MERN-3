import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'

import UserContext from './context/UserContext'
import ProductContext from './context/ProductContext'

const App = () => {
  const user = {
    name: "vishal",
    age: 32
  }
  const products = [
    {
      id:1,
      name:"laptop",
      price:"5000",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IVeFtEXa6Y239do4nhBrKG2Och-YwplXioxN5alhEw&s=10"

    },
    {
      id:2,
      name:"mobile",
      price:"50000",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8uYQgDMG5x3LVn_xlzIO5NG9KHOn6qevFQalsqZ3jg&s=10"
    },
    {
      id:2,
      name:"mobile",
      price:"50000",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8uYQgDMG5x3LVn_xlzIO5NG9KHOn6qevFQalsqZ3jg&s=10"
    },
    {
      id:2,
      name:"mobile",
      price:"50000",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8uYQgDMG5x3LVn_xlzIO5NG9KHOn6qevFQalsqZ3jg&s=10"
    },
    {
      id:2,
      name:"mobile",
      price:"50000",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8uYQgDMG5x3LVn_xlzIO5NG9KHOn6qevFQalsqZ3jg&s=10"
    },
    {
      id:2,
      name:"mobile",
      price:"50000",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8uYQgDMG5x3LVn_xlzIO5NG9KHOn6qevFQalsqZ3jg&s=10"
    },

  ]

  return (
    <>
      <UserContext.Provider value={user}>
        <ProductContext.Provider value={products}>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ProductContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App

