import "./App.css";
import { useState } from "react";

import WorldComponent from "./Components/Board/World";
function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "20%",
          paddingTop: 18,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>GENOGAME</h1>
        <h4>Sua vez de ser um genocida!</h4>

        <h4>
          Impeça que a Vacina do COVID 19 chegue até a população brasileira!
        </h4>
        <h6>(Use as setas do teclado pra ir para a direita e esquerda)</h6>
      </div>
      <WorldComponent />
    </div>
  );
}

export default App;
