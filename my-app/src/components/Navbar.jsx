import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Navbar() {
  const { cart } = useContext(CartContext)

  return (
    <div className="navbar">
      <h2>My Shop</h2>
      <h2 className="cart-count">🛒 {cart.length}</h2>
    </div>
  )
}

export default Navbar