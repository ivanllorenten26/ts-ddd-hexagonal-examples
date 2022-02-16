import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { CounterDescription, Counter } from "../";
type Props = {};

const CounterPage: FC<Props> = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={8}>
        <CounterDescription />
      </Grid>
      <Grid xs={8}>
        <Counter />
      </Grid>
    </Grid.Container>
  );
};

export default CounterPage;
