import { SmartCounter } from '../domain/smart-counter.aggregate-root';
import { SmartNumber } from '../domain/smart-number';
import { UseCase } from './UseCase';

export class SmartCounterDecreaser implements UseCase {
  constructor(private counter: SmartNumber) {}

  run(): SmartCounter {
    const newCounter = new SmartCounter(this.counter);
    newCounter.decrement();
    return newCounter;
  }
}
