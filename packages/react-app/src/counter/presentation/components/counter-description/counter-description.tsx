import React from "react";
import { Card } from "@nextui-org/react";

const CounterDescription = () => {
  return (
    <Card>
      <div>Business rules</div>
      <ul>
        <li>No negative numbers</li>
        <li>Max number = 10</li>
        <li>
          For each counter current value we'll display 2 calculated fields:
          <ul>
            <li>formula 1: number * number</li>
            <li>formula 2: number * number * 25 + 5</li>
          </ul>
        </li>
        <li>
          Each number, the counter current value or the calculated values, must
          follow the following rule:
          <ul>
            <li>If the number % 3 = 0, then color should be green</li>
            <li>If the number % 3 = 0, then color should be blue</li>
          </ul>
        </li>
      </ul>
    </Card>
  );
};

export default CounterDescription;
