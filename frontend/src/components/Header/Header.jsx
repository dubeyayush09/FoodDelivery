import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          "Craving something delicious? Browse, order, and enjoy fresh meals
          delivered fast to your doorstep. Your next meal is just a tap away!".
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header