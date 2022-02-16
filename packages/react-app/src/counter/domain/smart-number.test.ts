import { SmartNumber } from "./smart-number";

describe("smart number", () => {
  test("create method", () => {
    const smartNumber = SmartNumber.create(0);
    expect(smartNumber.value).toBe(0);
  });

  describe("calculateColor", () => {
    test("green", () => {
      const smartNumber = SmartNumber.create(0);
      expect(smartNumber.calculateColor()).toBe("green");
    });

    test("red, case %1", () => {
      const smartNumber = SmartNumber.create(1);
      expect(smartNumber.calculateColor()).toBe("red");
    });

    test("red, case %2", () => {
      const smartNumber = SmartNumber.create(2);
      expect(smartNumber.calculateColor()).toBe("red");
    });
  });
});
