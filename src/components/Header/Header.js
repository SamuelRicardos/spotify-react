import React, { useState, useEffect } from "react";
import "./Header.css";
import smallRight from "../../assets/icons/small-right.png";
import smallLeft from "../../assets/icons/small-left.png";
import search from "../../assets/icons/search.png";

const Header = ({ onSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (searchTerm.trim() === "") {
            onSearchResults([]);
            return;
        }

        fetch(`http://localhost:5000/artists?name_like=${searchTerm}`)
            .then(response => response.json())
            .then(data => onSearchResults(data))
            .catch(error => console.error("Erro ao buscar artistas:", error));
    }, [searchTerm, onSearchResults]);

    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Voltar" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Avançar" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="Pesquisar" />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar artistas..."
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};

export default Header;
