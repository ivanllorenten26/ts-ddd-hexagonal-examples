import React, { FC } from "react";
import { Text } from "@nextui-org/react";

type Props = {
  value: number;
  color: string;
};

const CounterValue: FC<Props> = ({ value, color }) => {
  return (
    <Text color={color === "red" ? "error" : "success"} size="30px">
      {value}
    </Text>
  );
};

export default CounterValue;
