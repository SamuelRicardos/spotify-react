import React, { useState, useEffect } from "react";
import "./Header.css";
import smallRight from "../../assets/icons/small-right.png";
import smallLeft from "../../assets/icons/small-left.png";
import search from "../../assets/icons/search.png";

const Header = ({ onSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);

    // Buscar artistas da API ao carregar o componente
    useEffect(() => {
        fetch("http://localhost:5000/artists") // Certifique-se que o json-server está rodando
            .then(response => response.json())
            .then(data => setArtists(data))
            .catch(error => console.error("Erro ao buscar artistas:", error));
    }, []);

    // Função de pesquisa
    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Filtrar artistas
        const filteredArtists = artists.filter(artist =>
            artist.name.toLowerCase().includes(term.toLowerCase())
        );

        // Passar os resultados filtrados para outro componente (Main.js, Foo.js, etc.)
        onSearchResults(filteredArtists);
    };

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
                    onChange={handleInputChange}
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
