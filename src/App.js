import './App.css';
import React, { useState } from "react";
import Header from './components/Header/Header';
import '../src/Reset/Reset.css';
import '../src/Vars/Vars.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [searchResults, setSearchResults] = useState([]); // Estado para armazenar os resultados da pesquisa

  return (
    <div>
      <Sidebar />
      <Header onSearchResults={setSearchResults} />
      <Main searchResults={searchResults} />
      <Footer />
    </div>
  );
}

export default App;
