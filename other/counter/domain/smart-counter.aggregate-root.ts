import { SmartNumber } from './smart-number';

export class SmartCounter {
  private delta: number = 1;
  private _counter: SmartNumber;

  constructor(counter: SmartNumber) {
    this._counter = counter;
  }

  static fromPrimitives(counter: number): SmartCounter {
    return new SmartCounter(SmartNumber.create(counter));
  }

  static reset(): SmartCounter {
    return new SmartCounter(SmartNumber.create(0));
  }

  get counter(): SmartNumber {
    return this._counter;
  }

  increment(): void {
    if (this._counter.value < 10)
      this._counter = SmartNumber.create(this._counter.value + this.delta);
  }

  decrement(): void {
    if (this._counter.value > 0)
      this._counter = SmartNumber.create(this._counter.value - this.delta);
  }

  formula1(): SmartNumber {
    return SmartNumber.create(this._counter.value * this._counter.value);
  }

  formula2(): SmartNumber {
    return SmartNumber.create(this._counter.value * this._counter.value * 2 + 5);
  }
}
