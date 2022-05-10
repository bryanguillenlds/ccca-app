import ItemRepository from "../domain/repository/ItemRepository";
import Order from "../domain/entity/Order";
import OrderRepository from "../domain/repository/OrderRepository";
import CouponRepository from "../domain/repository/CouponRepository";

export default class PlaceOrder {

  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository: OrderRepository,
    readonly couponRepository: CouponRepository
  ) {}

  async execute(input: Input): Promise<Output> {
    const sequence = await this.orderRepository.count() + 1;
    const order = new Order(input.cpf, input.date, sequence);
    for(const orderItem of input.orderItems) {
      const item = await this.itemRepository.get(orderItem.idItem);
      if(!item) throw new Error("Item not found");
      order.addItem(item, orderItem.quantity);
    }
    if (input.coupon) {
      const coupon = await this.couponRepository.getByCode(input.coupon);
      if (coupon) order.addCoupon(coupon);
    }
    await this.orderRepository.save(order);
    const total = order.getTotal();
    return {
      code: order.code.value,
      total
    }
  }
}

type Input = {
  cpf: string,
  orderItems: { idItem: number, quantity: number}[],
  coupon?: string,
  date?: Date
}

type Output = {
  total: number,
  code: string
}