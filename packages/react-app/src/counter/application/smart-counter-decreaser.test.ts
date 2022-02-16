import { SmartNumber } from "../domain/smart-number";
import { SmartCounterDecreaser } from "./smart-counter-decreaser";

describe("SmartCounterDecreaser", () => {
  test("should decrement the current value", () => {
    const currentNumber = SmartNumber.create(1);
    const cmd = new SmartCounterDecreaser(currentNumber);
    const smartCounter = cmd.run();
    expect(smartCounter.counter.value).toBe(0);
  });
});
