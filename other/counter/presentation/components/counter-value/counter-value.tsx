import React, { FC } from 'react';

type Props = {
  value: number;
  color: string;
};

const CounterValue: FC<Props> = ({ value, color }) => {
  return <div style={{ color: color === 'red' ? 'Crimson' : 'LawnGreen' }}>{value}</div>;
};

export default CounterValue;
