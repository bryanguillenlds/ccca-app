export default class OrderCode {
  value: string;

  constructor(date: Date, sequence: number) {
    this.value = this.generateCode(date, sequence);
  }

  //private because none is going to use it from outside
  private generateCode(date: Date, sequence: number) {
    const year = date.getFullYear();
    return `${year}${(new String(sequence).padStart(8, "0"))}`;
  }
}