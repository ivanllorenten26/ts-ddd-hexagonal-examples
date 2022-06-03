import { SmartNumber } from "../domain/smart-number";
import { SmartCounterIncreaser } from "./smart-counter-increaser";

describe("SmartCounterIncreaser", () => {
  test("should increment the current value", () => {
    const currentNumber = SmartNumber.create(1);
    const cmd = new SmartCounterIncreaser(currentNumber);
    const smartCounter = cmd.run();
    expect(smartCounter.counter.value).toBe(2);
  });
});
