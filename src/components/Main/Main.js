import React from "react";
import "./Main.css";

const Main = ({ searchResults }) => {
  return (
    <main>
      {searchResults.length > 0 ? (
        <div>
          <h2>Resultados da Pesquisa</h2>
          <ul>
            {searchResults.map((artist) => (
              <li key={artist.id}>
                <img src={artist.urlImg} alt={artist.name} />
                <p>{artist.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nenhum artista encontrado</p>
      )}
    </main>
  );
};

export default Main;
