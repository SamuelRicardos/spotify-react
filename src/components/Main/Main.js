import React from "react";
import "./Main.css";

const Main = ({ searchResults, artistResults }) => {
  // Catálogos iniciais (amostras) para exibir para o usuário
  const catalogos = [
    { name: "Boas festas", img: require("../../assets/playlist/1.jpeg") },
    { name: "Feitos para você", img: require("../../assets/playlist/2.png") },
    { name: "Lançamentos", img: require("../../assets/playlist/3.jpeg") },
    { name: "Creators", img: require("../../assets/playlist/4.jpeg") },
    { name: "Para treinar", img: require("../../assets/playlist/5.jpeg") },
    { name: "Podcasts", img: require("../../assets/playlist/6.jpeg") },
    { name: "Sertanejo", img: require("../../assets/playlist/7.jpeg") },
    { name: "Samba e pagode", img: require("../../assets/playlist/8.jpeg") },
    { name: "Funk", img: require("../../assets/playlist/9.jpeg") },
    { name: "MPB", img: require("../../assets/playlist/10.jpeg") },
    { name: "Rock", img: require("../../assets/playlist/11.jpeg") },
    { name: "Hip Hop", img: require("../../assets/playlist/12.jpeg") },
    { name: "Indie", img: require("../../assets/playlist/13.jpeg") },
    { name: "Relax", img: require("../../assets/playlist/14.jpeg") },
    { name: "Música Latina", img: require("../../assets/playlist/15.jpeg") }
  ];

  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting">Boas vindas</h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>

        {/* Exibindo os catálogos iniciais como amostras */}
        <div className="offer__scroll-container">
          <h2>Catálogos em Destaque</h2>
          <div className="offer__list-item">
            {catalogos.map((catalogo, index) => (
              <a href="" key={index} className="cards">
                <div className={`cards card${index + 1}`}>
                  <img src={catalogo.img} alt={catalogo.name} />
                  <span>{catalogo.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Exibição dos artistas pesquisados */}
        {artistResults && artistResults.length > 0 && (
          <div className="offer__scroll-container">
            <h2>Artistas Encontrados</h2>
            <div className="offer__list-item">
              {artistResults.map((artist, index) => (
                <a href="" key={index} className="cards">
                  <div className={`cards card${index + 1}`}>
                    <img src={artist.image} alt={artist.name} />
                    <span>{artist.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
