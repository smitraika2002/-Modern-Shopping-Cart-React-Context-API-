import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cart, setCart } = useContext(CartContext)

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
    setCart(updated)
  }

  const decreaseQty = (id) => {
    const updated = cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0)

    setCart(updated)
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div className="cart">
      <h1>Cart</h1>

      {cart.length === 0 && <p>Empty cart</p>}

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.img} alt="" />
          <span>{item.name}</span>

          <div>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <span>${item.price * item.qty}</span>
        </div>
      ))}

      <h2>Total: ${total}</h2>
    </div>
  )
}

export default Cart