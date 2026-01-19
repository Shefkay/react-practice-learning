import './App.css'
import Card from './components/Card'
import ToyCard from './components/ToyCard'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  function addCart(toy) {
    setCart([
      ...cart, toy
    ]
    )
  }

  return (
    <>

      <div className='toy-card'>
        <ToyCard
          name="Teddybear"
          price="$30"
          image="/img1.webp"
          onToaddCard={() => addCart({ name: "Teddybear", price: "$30", image: "/img1.webp" })}
        />
        <ToyCard name="Flamingo" price="$50" image="/img2.webp"
          onToaddCard={() => addCart({ name: "Flamingo", price: "$50", image: "/img2.webp" })}
        />
        <ToyCard name="GreatBaby" price="$70" image="/img3.webp"
          onToaddCard={() => addCart({ name: "GreatBaby", price: "$70", image: "/img3.webp" })}
        />

      </div>
      {/* <Card /> */}
      <div className='cart'>
        <h2>🛒 Cart:</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} /> {item.name} - {item.price}
            </li>
          ))}
        </ul>

      </div>


    </>
  )
}

export default App
