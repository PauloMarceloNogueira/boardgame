import React, { useEffect, useState } from "react";

import { Container } from "./styles";

interface TimeI {
  start: boolean;
  reset?: boolean;
  onCompleted(): void;
}
const TimeComponent: React.FC<TimeI> = (handlers) => {
  const defaultTime = 10;
  const { reset, start, onCompleted } = handlers;
  const [time, setTime] = useState(defaultTime);

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      if (time === 1) {
        onCompleted();
        setTime(defaultTime);
      }
    }
  }, [start, time]);

  useEffect(() => {
    if (reset) {
      setTime(defaultTime);
    }
  }, [reset]);
  return <Container>{time}</Container>;
};

export default TimeComponent;
