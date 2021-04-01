import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 5fr);
  grid-template-rows: repeat(4, 5fr);
  justify-content: center;
  height: 70%;
  width: 90%;
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
