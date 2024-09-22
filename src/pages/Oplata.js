// Oplata.js
import React from 'react';
import oplataImage from '../assets/images/проекты.png';

function Oplata() {
  return (
    <div class="image-container">
      <center><img src={oplataImage} width="70%" alt="" /></center>
      <div className="text-overlay">
          <h1>оплата и телефоны</h1>
          <p>Добро пожаловать в оплату</p>
      </div>
    </div>
  );
}

export default Oplata;
