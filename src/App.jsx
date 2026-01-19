import './App.css'
import Card from './components/Card'
import ToyCard from './components/ToyCard'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  function addCart(toy) {
    // setCart([
    //   ...cart, toy
    // ]
    // )
    const existingItem = cart.find(item => item.name === toy.name);

    if (existingItem) {
      // increase quantity
      const updatedCart = cart.map(item =>
        item.name === toy.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // add new toy with quantity = 1
      setCart([...cart, { ...toy, quantity: 1 }]);
    }
  }

  function removeFromCart(toyName) {
    // // remove item by index
    // const newCart = cart.filter((_, i) => i !== index);
    // setCart(newCart);
    const updatedCart = cart
      .map(item =>
        item.name === toyName
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0); // remove if quantity is 0
    setCart(updatedCart);
  }

  // const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className='toy-card'>
        <div className='toy-cardd'>
          <ToyCard
            name="Teddy Bear"
            price={30}
            image="/img1.webp"
            onToaddCard={() => addCart(
              { name: "Teddybear", price: 30, image: "/img1.webp" }
            )}
          />
          <ToyCard
            name="Flamingo"
            price={50}
            image="/img2.webp"
            onToaddCard={() => addCart(
              { name: "Flamingo", price: 50, image: "/img2.webp" }
            )}
          />
          <ToyCard
            name="GreatBaby"
            price={70}
            image="/img3.webp"
            onToaddCard={() => addCart(
              { name: "Great Baby", price: 70, image: "/img3.webp" }
            )}
          />
        </div>
      </div>

      {/* Cart */}
      <div className='cart'>
        <h2>🛒 Cart:</h2>
        <div className='cart-list'>
          {cart.map((item, index) => (
            <div key={index} className='added-cart'>
              <img src={item.image} alt={item.name} />
              <div className='cart-name-quantity-price'>
                <div>{item.name}</div>
                <div>(x {item.quantity})</div>
                <div>${item.price}</div>
              </div>
              <div>
                <button onClick={() => removeFromCart(item.name)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <h1>Total Price: ${totalPrice}</h1>
      </div>

      {/* QR code */}
      <div className='card-container'>
        <Card />
      </div>
    </>
  )
}

export default App
