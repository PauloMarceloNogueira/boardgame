import React from "react";
import bolso1 from "../../Assets/bolso1.png";
import bolso2 from "../../Assets/bolso2png.png";
import vacina from "../../Assets/vacina.png";
import { Container } from "./styles";

const PinUserComponent: React.FC<{ type?: string }> = ({ type }) => {
  const getImg = () => {
    if (type === "vacina") return vacina;
    if (type === "bolso1") return bolso1;
    return bolso2;
  };
  return (
    <Container>
      <img src={getImg()} width={50} />
    </Container>
  );
};

export default PinUserComponent;
