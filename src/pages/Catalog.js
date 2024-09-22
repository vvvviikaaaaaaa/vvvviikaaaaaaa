// Catalog.js
import React from 'react';
import catalogImage from '../assets/images/проекты.png';

function Catalog() {
  return (
    <div class="image-container">
      <center><img src={catalogImage} width="70%" alt="" /></center>
      <div className="text-overlay">
          <h1>каталог товаров</h1>
          <p>Добро пожаловать в каталог товаров</p>
      </div>
    </div>
  );
}

export default Catalog;
