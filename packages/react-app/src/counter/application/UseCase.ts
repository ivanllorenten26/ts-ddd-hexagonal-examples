import { SmartCounter } from "../domain/smart-counter.aggregate-root";

export interface UseCase {
  run: () => SmartCounter;
}
