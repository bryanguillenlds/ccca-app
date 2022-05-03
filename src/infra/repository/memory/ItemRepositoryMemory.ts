import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
  items: Item[];

  constructor() {
    this.items = [
      new Item(1, "Guitarra", 1000),
      new Item(2, "Amp", 5000),
      new Item(3, "Cable", 30)
    ];
  }

  getById(idItem: number): Item | undefined {
    return this.items.find(item => item.idItem === idItem);
  }
}