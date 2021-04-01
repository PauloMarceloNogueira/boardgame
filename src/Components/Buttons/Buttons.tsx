import React from "react";

import { Button } from "./styles";

interface ButtonI {
  onClick(): void;
  disable?: boolean;
}

const ButtonsComponent: React.FC<ButtonI> = ({
  onClick,
  children,
  disable,
}) => {
  return (
    <Button onClick={onClick} disabled={disable}>
      {children}
    </Button>
  );
};

export default ButtonsComponent;
