// Home.js
import React from 'react';
import homeImage from '../assets/images/проекты.png';

function Home() {
  return (
    <div className="image-container">
      <center><img src={homeImage} width="70%" alt="" /></center>
      <div className="text-overlay">
          <h1>Главная страница</h1>
          <p>Добро пожаловать на главную страницу!</p>
      </div>
    </div>
  );
}

export default Home;
