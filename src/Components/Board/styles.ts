import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

export const ContainerWorld = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 80%;
  flex-direction: column;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 5fr);
  grid-template-rows: repeat(4, 5fr);
  justify-content: center;
  height: 70%;
  width: 90%;
`;

export const World = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 5fr);
  grid-template-rows: repeat(5, 5fr);
  justify-content: center;
  height: 70%;
  width: 90%;
  border: 1px solid black;
`;

export const BoardContent = styled.div<{ row?: string; column?: string }>`
  grid-column: ${({ column }) => (column ? column : "1")};
  grid-row: ${({ row }) => (row ? row : "1")};

  justify-content: center;
  display: flex;
  align-items: center;
  color: #000;
  border: 1px solid #ddd;
`;

export const Player = styled.div<{ position: Array<number> }>`
  justify-content: center;
  align-items: center;
  display: flex;
  grid-column: ${({ position }) => position[1]};
  grid-row: ${({ position }) => position[0]};
`;

export const Modal = styled.div`
  position: absolute;
  width: 30%;
  height: 30%;
  color: #fff;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Keys = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: space-between;
`;
