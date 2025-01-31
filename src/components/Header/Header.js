import React, { useState } from "react";
import "./Header.css";
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };

    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="" />
                <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Pesquisar..."
      />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button class="login">Entrar</button>
            </div>
        </nav>
    )
}

export default Header;