import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Frase from "./components/Frase";

// <img src={logo} className="App-logo" alt="logo" />

function App() {
  const [frase, guardarFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    const frase = await api.json();

    console.log(frase[0]);

    guardarFrase(frase[0]);
  };

  return (
    <div>
      <Header title="Bienvenidos a Breaking Bad" />
      <Frase frase={frase} />
      <button onClick={() => consultarApi()}>Consultar</button>
    </div>
  );
}

export default App;
