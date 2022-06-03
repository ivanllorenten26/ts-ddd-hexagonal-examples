import React, { FC } from 'react';

import { CounterDescription, Counter } from '../';
type Props = {};

const CounterPage: FC<Props> = () => {
  return (
    <div>
      <div>
        <CounterDescription />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default CounterPage;
