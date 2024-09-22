import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home'
import Advantage from '../pages/Advantage'
import Catalog from '../pages/Catalog'
import Dostavka from '../pages/Dostavka'
import Oplata from '../pages/Oplata'

function Middle() {
    return(
        <Router>
        <tr>
            <td>
                <main>
                    <Routes>
                        {/* Определяем маршруты и какой компонент рендерить */}
                        <Route path="/" element={<Home />} />
                        <Route path="/advantage" element={<Advantage />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/dostavka" element={<Dostavka />} />
                        <Route path="/oplata" element={<Oplata />} />
                    </Routes>
                </main>
            </td>
            <td style={{ width: "200px", backgroundColor: "#d9d9d9" }}>
                <div>
                    <nav>
                        <ul>
                            <li className="active">
                                <Link to="/">Главная</Link>
                            </li>
                            <li className="active">
                                <Link to="/advantage">ПРЕИМУЩЕСТВО НАС</Link>
                            </li>
                            <li className="active">
                                <Link to="/catalog">КАТАЛОГ ТОВАРОВ<span className="fas fa-caret-down first"></span></Link>
                            </li>
                            <li className="active">
                                <Link to="/dostavka">ДОСТАВКА И ПОМОЩЬ<span className="fas-first"></span></Link>
                            </li>
                            <li className="active">
                                <Link to="/oplata">ОПЛАТА И ТЕЛЕФОНЫ</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </td>
        </tr>
        </Router>
    );
}

export default Middle;