import React, { useCallback, useEffect, useState } from "react";
import PinUserComponent from "../PinUser/PinUser";

import { ContainerWorld, World, Player, Modal, Keys } from "./styles";

const WorldComponent: React.FC = () => {
  const [userPosition, moveUser] = useState([5, 3]);
  //  [column, row]
  const [enemyPosition, moveEnemy] = useState([1, 1]);
  const [gameOver, setGameOver] = useState(false);
  const [img, setImg] = useState("bolso1");

  useEffect(() => {
    setTimeout(() => {
      if (enemyPosition[0] < 5) {
        moveEnemy([enemyPosition[0] + 1, enemyPosition[1]]);
      }
    }, 300);
  }, [enemyPosition]);

  useEffect(() => {
    if (
      enemyPosition[0] === userPosition[0] &&
      enemyPosition[1] === userPosition[1]
    ) {
      setImg("bolso2");
      setInterval(() => {
        setImg("bolso1");
      }, 300);
      newEnemy();
    }

    if (
      enemyPosition[0] === userPosition[0] &&
      enemyPosition[1] !== userPosition[1]
    ) {
      setGameOver(true);
    }
  }, [enemyPosition, userPosition]);

  const handleLeft = () => {
    if (userPosition[1] > 1) {
      moveUser([userPosition[0], userPosition[1] - 1]);
    }
  };

  const handleRight = () => {
    if (userPosition[1] < 5) {
      moveUser([userPosition[0], userPosition[1] + 1]);
    }
  };

  const onKeyDown = useCallback(
    (e) => {
      // Left
      if (e.keyCode === 37) {
        handleLeft();
      }
      // Up
      // if (e.keyCode === 38) {
      //   if (userPosition[0] > 1) {
      //     moveUser([userPosition[0] - 1, userPosition[1]]);
      //   }
      // }
      // Right
      if (e.keyCode === 39) {
        handleRight();
      }
      // Down
      // if (e.keyCode === 40) {
      //   if (userPosition[0] < 5) {
      //     moveUser([userPosition[0] + 1, userPosition[1]]);
      //   }
      // }
    },
    [userPosition]
  );

  const newEnemy = () => {
    if (gameOver) {
      setGameOver(false);
    }
    moveEnemy([1, Math.floor(Math.random() * (5 - 1 + 1)) + 1]);
  };

  useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown);
    return () => document.body.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return (
    <ContainerWorld>
      <World>
        <Player position={enemyPosition}>
          <PinUserComponent type={"vacina"} />
        </Player>
        <Player position={userPosition}>
          <PinUserComponent type={img} />
        </Player>
      </World>
      <Keys>
        <button
          onClick={handleLeft}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        >{`<`}</button>
        <button
          onClick={handleRight}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        >{`>`}</button>
      </Keys>

      {gameOver && (
        <Modal>
          {`Game Over =[\n
          O Brasil foi vacinado, APESAR DE VOCÊ`}
        </Modal>
      )}
    </ContainerWorld>
  );
};

export default WorldComponent;
