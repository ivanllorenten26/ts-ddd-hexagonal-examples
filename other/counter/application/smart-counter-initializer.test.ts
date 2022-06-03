import { SmartCounterInitializer } from "./smart-counter-initializer";

describe("SmartCounterInitializer", () => {
  test("should initialize the counter with value 0", () => {
    const initializerCmd = new SmartCounterInitializer();
    const smartCounter = initializerCmd.run();
    expect(smartCounter.counter.value).toBe(0);
  });
});
