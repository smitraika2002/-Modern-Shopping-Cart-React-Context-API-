import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { CartContext } from './context/CartContext'
import './App.css'

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <ProductList />
      <Cart />
    </CartContext.Provider>
  )
}

export default App