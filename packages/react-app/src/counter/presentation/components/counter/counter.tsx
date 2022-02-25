import { Grid, Button, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { SmartCounterDecreaser } from "../../../application/smart-counter-decreaser";
import { SmartCounterIncreaser } from "../../../application/smart-counter-increaser";
import { SmartCounterInitializer } from "../../../application/smart-counter-initializer";
import { SmartCounter } from "../../../domain/smart-counter.aggregate-root";
import CounterValue from "../counter-value/counter-value";

const Counter = () => {
  const genInitialValue = () => {
    const cmd = new SmartCounterInitializer();
    return cmd.run();
  };

  const [currentValue, setCurrentValue] = useState<SmartCounter>(
    genInitialValue()
  );

  const handleIncrement = () => {
    const cmd = new SmartCounterIncreaser(currentValue.counter);
    setCurrentValue(cmd.run());
  };

  const handleDecrement = () => {
    const cmd = new SmartCounterDecreaser(currentValue.counter);
    setCurrentValue(cmd.run());
  };

  return (
    <>
      <Grid.Container>
        <Grid xs={4}>Original</Grid>
        <Grid xs={4}>Formula 1</Grid>
        <Grid xs={4}>Formula 2</Grid>
        <Grid xs={4}>
          <CounterValue
            value={currentValue.counter.value}
            color={currentValue.counter.calculateColor()}
          />
        </Grid>
        <Grid xs={4}>
          <CounterValue
            value={currentValue.formula1().value}
            color={currentValue.formula1().calculateColor()}
          />
        </Grid>
        <Grid xs={4}>
          <CounterValue
            value={currentValue.formula2().value}
            color={currentValue.formula2().calculateColor()}
          />
        </Grid>
        <Grid xs={4}>
          <Button color="error" onClick={handleDecrement}>
            Decrement
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button onClick={handleIncrement}>Increment</Button>
        </Grid>
        <Grid xs={4}>
          <Button color="secondary">Reset</Button>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Counter;
