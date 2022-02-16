import { SmartCounter } from "./smart-counter.aggregate-root";
import { SmartNumber } from "./smart-number";

describe("SmartCounter", () => {
  describe("constructor", () => {
    test("should create a new instance given an SmartNumber", () => {
      const smartNumber = SmartNumber.create(1);
      const smartCounter = new SmartCounter(smartNumber);
      expect(smartCounter.counter.value).toBe(1);
      expect(smartCounter.counter.calculateColor()).toBe("red");
    });
  });

  describe("fromPrimitive", () => {
    test("should create a new instance given a number", () => {
      const smartCounter = SmartCounter.fromPrimitives(1);
      expect(smartCounter.counter.value).toBe(1);
      expect(smartCounter.counter.calculateColor()).toBe("red");
    });
  });

  describe("increment", () => {
    test("should add the delta to the current value of the counter if is lower than 10", () => {
      const smartCounter = SmartCounter.fromPrimitives(1);
      smartCounter.increment();
      expect(smartCounter.counter.value).toBe(2);
    });

    test("should add the delta to the current value of the counter if is equal to 10", () => {
      const smartCounter = SmartCounter.fromPrimitives(10);
      smartCounter.increment();
      expect(smartCounter.counter.value).toBe(10);
    });
  });

  describe("decrement", () => {
    test("should extract one to the current value of the counter if higher that 0", () => {
      const smartCounter = SmartCounter.fromPrimitives(1);
      smartCounter.decrement();
      expect(smartCounter.counter.value).toBe(0);
    });

    test("should extract one to the current value of the counter if equal to 0", () => {
      const smartCounter = SmartCounter.fromPrimitives(0);
      smartCounter.decrement();
      expect(smartCounter.counter.value).toBe(0);
    });
  });

  describe("reset", () => {
    test("should set the current value to 0", () => {
      const smartCounter = SmartCounter.reset();
      expect(smartCounter.counter.value).toBe(0);
    });
  });

  describe("formula 1", () => {
    test("should return the calculated value", () => {
      const smartCounter = SmartCounter.fromPrimitives(3);
      expect(smartCounter.formula1().value).toBe(9);
    });
  });

  describe("formula 2", () => {
    test("should return the calculated value", () => {
      const originalValue = 3;
      const smartCounter = SmartCounter.fromPrimitives(originalValue);
      const expectedValue = originalValue * 3 * 2 + 5;
      expect(smartCounter.formula2().value).toBe(expectedValue);
    });
  });
});
