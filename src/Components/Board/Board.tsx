import React, { useState } from "react";

import { Board, BoardContent, Container } from "./styles";
import PinUserComponent from "../PinUser/PinUser";

import TimeComponent from "../Time/Time";
import { ButtonsContainer } from "../../styles";
import ButtonsComponent from "../Buttons/Buttons";
const BoardComponent: React.FC<{ userPosition: number }> = ({
  userPosition,
}) => {
  const boardData = [
    { row: "1", column: "2" },
    { row: "1", column: "3" },
    { row: "1", column: "4" },
    { row: "1", column: "5" },
    { row: "2", column: "5" },
    { row: "3", column: "5" },
    { row: "4", column: "5" },
    { row: "4", column: "4" },
    { row: "4", column: "3" },
    { row: "4", column: "2" },
  ];

  const [position, setPosition] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [restart, setRestart] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const handleChangePosition = () => {
    setStartTime(true);
    setRestart(false);
    if (position < 9) {
      setPosition(position + 1);
    }
    if (position + 1 === 9) {
      setStartTime(false);
    }
  };
  const handleReset = () => {
    setStartTime(false);
    setRestart(true);
    setEndTime(false);
    setPosition(0);
  };

  return (
    <Container>
      <Board>
        {boardData.map((board, index) => {
          return (
            <BoardContent row={board.row} column={board.column}>
              {position === index && <PinUserComponent />}
            </BoardContent>
          );
        })}
        <BoardContent row={"2/4"} column={"2/3"} style={{ border: "none" }}>
          {!endTime && position > 0 && (
            <TimeComponent
              start={startTime}
              reset={restart}
              onCompleted={() => setEndTime(true)}
            />
          )}
          {position === 0 && !endTime && "Ande com o usuário para iniciar"}
          {position === 9 && !endTime && "Ganhou da máquina!"}
          {position <= 9 && endTime && "Perdeu da máquina!"}
        </BoardContent>
        <BoardContent row={"2/4"} column={"3"} style={{ border: "none" }}>
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
        </BoardContent>
      </Board>
    </Container>
  );
};

export default BoardComponent;
