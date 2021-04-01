import BoardComponent from "./Components/Board/Board";
import "./App.css";
import { useState } from "react";
import { ButtonsContainer } from "./styles";
import ButtonsComponent from "./Components/Buttons/Buttons";
function App() {
  const [position, setPosition] = useState(0);
  const handleChangePosition = () => {
    if (position < 9) {
      setPosition(position + 1);
    }
  };
  const handleReset = () => {
    setPosition(0);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 16,
      }}
    >
      <h3>Board Game</h3>
      <ButtonsContainer>
        <ButtonsComponent
          onClick={handleChangePosition}
          disable={position === 9}
        >
          Andar com usuário
        </ButtonsComponent>

        <ButtonsComponent onClick={handleReset} disable={position === 0}>
          Reset
        </ButtonsComponent>
      </ButtonsContainer>
      <BoardComponent userPosition={position} />
    </div>
  );
}

export default App;
