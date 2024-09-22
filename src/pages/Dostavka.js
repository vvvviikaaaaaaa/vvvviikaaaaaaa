// Dostavka.js
import React from 'react';
import dostavkaImage from '../assets/images/проекты.png';

function Dostavka() {
  return (
    <div className="image-container">
      <center><img src={dostavkaImage} width="70%" alt="" /></center>
      <div className="text-overlay">
          <h1>доставка и помощь</h1>
          <p>Добро пожаловать в доставку</p>
      </div>
    </div>
  );
}

export default Dostavka;
