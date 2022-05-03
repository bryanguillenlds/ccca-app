import { TsJestCompiler } from "ts-jest";
import Dimension from "./Dimension";

export default class Item {

  constructor(
    readonly idItem: number,
    readonly description: string,
    readonly price: number,
    readonly dimension?: Dimension,
    readonly weight?: number
  ) {}

  getVolume() {
    if (this.dimension) return this.dimension.getVolume();
    return 0;
  }

  getDensity() {
    if (this.weight && this.dimension) {
      return this.weight / this.dimension.getVolume();
    } else {
      return 0;
    }
  }
}