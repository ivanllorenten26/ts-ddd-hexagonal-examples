import React, { useState } from 'react';

import { SmartCounterDecreaser } from '../../../application/smart-counter-decreaser';
import { SmartCounterIncreaser } from '../../../application/smart-counter-increaser';
import { SmartCounterInitializer } from '../../../application/smart-counter-initializer';
import { SmartCounter } from '../../../domain/smart-counter.aggregate-root';
import CounterValue from '../counter-value/counter-value';

const Counter = () => {
  const genInitialValue = () => {
    const cmd = new SmartCounterInitializer();
    return cmd.run();
  };

  const [currentValue, setCurrentValue] = useState<SmartCounter>(genInitialValue());

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
      <div>
        <div>Original</div>
        <div>Formula 1</div>
        <div>Formula 2</div>
        <div>
          <CounterValue
            value={currentValue.counter.value}
            color={currentValue.counter.calculateColor()}
          />
        </div>
        <div>
          <CounterValue
            value={currentValue.formula1().value}
            color={currentValue.formula1().calculateColor()}
          />
        </div>
        <div>
          <CounterValue
            value={currentValue.formula2().value}
            color={currentValue.formula2().calculateColor()}
          />
        </div>
        <div>
          <button color="error" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
        <div>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <div>
          <button color="secondary">Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
