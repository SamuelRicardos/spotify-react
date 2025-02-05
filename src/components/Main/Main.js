import React from "react";
import "./Main.css";

// Adicionando imagens para os catálogos pré-definidos
import Playlist1 from "../../assets/playlist/1.jpeg";
import Playlist2 from "../../assets/playlist/2.png";
import Playlist3 from "../../assets/playlist/3.jpeg";
import Playlist4 from "../../assets/playlist/4.jpeg";
import Playlist5 from "../../assets/playlist/5.jpeg";
import Playlist6 from "../../assets/playlist/6.jpeg";
import Playlist7 from "../../assets/playlist/7.jpeg";
import Playlist8 from "../../assets/playlist/8.jpeg";
import Playlist9 from "../../assets/playlist/9.jpeg";
import Playlist10 from "../../assets/playlist/10.jpeg";
import Playlist11 from "../../assets/playlist/11.jpeg";
import Playlist12 from "../../assets/playlist/12.jpeg";
import Playlist13 from "../../assets/playlist/13.jpeg";
import Playlist14 from "../../assets/playlist/14.jpeg";
import Playlist15 from "../../assets/playlist/15.jpeg";
// ... (importando outras imagens)

const Main = ({ searchResults }) => {
  // Catálogos iniciais (amostras) para exibir para o usuário
  const catalogos = [
    { name: "Boas festas", img: Playlist1 },
    { name: "Feitos para você", img: Playlist2 },
    { name: "Lançamentos", img: Playlist3 },
    { name: "Creators", img: Playlist4 },
    { name: "Para treinar", img: Playlist5 },
    { name: "Podcasts", img: Playlist6 },
    { name: "Sertanejo", img: Playlist7 },
    { name: "Samba e pagode", img: Playlist8 },
    { name: "Funk", img: Playlist9 },
    { name: "MPB", img: Playlist10 },
    { name: "Rock", img: Playlist11 },
    { name: "Hip Hop", img: Playlist12 },
    { name: "Indie", img: Playlist13 },
    { name: "Relax", img: Playlist14 },
    { name: "Música Latina", img: Playlist15 }
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
      </div>
    </div>
  );
};

export default Main;
