export class SmartNumber {
  constructor(readonly value: number) {}

  calculateColor() {
    if (this.value % 3 === 0) return 'green';
    return 'red';
  }

  static create(value: number) {
    return new SmartNumber(value);
  }
}
