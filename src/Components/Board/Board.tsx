import React from "react";

import { Board, BoardContent, Container } from "./styles";
import PinUserComponent from "../PinUser/PinUser";
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
  return (
    <Container>
      <Board>
        {boardData.map((board, index) => {
          return (
            <BoardContent row={board.row} column={board.column}>
              {userPosition === index && <PinUserComponent />}
            </BoardContent>
          );
        })}
      </Board>
    </Container>
  );
};

export default BoardComponent;
