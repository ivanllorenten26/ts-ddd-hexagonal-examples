import { SmartCounter } from "../domain/smart-counter.aggregate-root";
import { UseCase } from "./UseCase";

export class SmartCounterInitializer implements UseCase {
  run(): SmartCounter {
    return SmartCounter.reset();
  }
}
