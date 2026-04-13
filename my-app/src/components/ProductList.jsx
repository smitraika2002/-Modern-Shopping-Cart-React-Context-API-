import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const products = [
  {
    id: 1,
    name: 'iPhone 17 Pro (256GB)',
    price: 1199,
    desc: 'A17 chip, 120Hz display, triple camera system, titanium design.',
    img: "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-17-Pro-4x3-1:4x3?ts=1757617103913&dpr=on"
  },
  {
    id: 2,
    name: 'MacBook Pro M4',
    price: 1999,
    desc: 'Apple M4 chip, 16-inch Retina display, ultra-fast performance for devs.',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
  },
  {
    id: 3,
    name: 'Apple AirPods Max',
    price: 549,
    desc: 'High-fidelity audio, active noise cancellation, premium build.',
    img: 'data:image/webp;base64,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'
  }
]

function ProductList() {
  const { cart, setCart } = useContext(CartContext)

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      const updated = cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
      setCart(updated)
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="product-list">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList