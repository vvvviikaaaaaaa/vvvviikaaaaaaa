// Advantage.js
import React from 'react';
import advantageImage from '../assets/images/проекты.png';

function Advantage() {
  return (
    <div class="image-container">
      <center><img src={advantageImage} width="70%" alt="" /></center>
      <div className="text-overlay">
          <h1>преимущества</h1>
          <p>Добро пожаловать в преимущества</p>
      </div>
    </div>
  );
}

export default Advantage;
