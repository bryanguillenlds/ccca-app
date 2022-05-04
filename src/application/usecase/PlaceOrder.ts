// import CouponRepository from "../../domain/repository/CouponRepository";
import ItemRepository from "../../domain/repository/ItemRepository";
import Order from "../../domain/entity/Order";
import OrderRepository from "../../domain/repository/OrderRepository";

export default class PlaceOrder {

  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository: OrderRepository
    // readonly couponRepository: CouponRepository
  ) {}

  async execute(input: Input): Promise<Output> {
    const order = new Order(input.cpf);
    for(const orderItem of input.orderItems) {
      const item = await this.itemRepository.get(orderItem.idItem);
      if(!item) throw new Error("Item not found");
      order.addItem(item, orderItem.quantity);
    }
    // if (input.coupon) {
    //   const coupon = this.couponRepository.getByCode(input.coupon);
    //   if (coupon) order.addCoupon(coupon);
    // }
    await this.orderRepository.save(order);
    const total = order.getTotal();
    return {
      total
    }
  }
}

type Input = {
  cpf: string,
  orderItems: { idItem: number, quantity: number}[],
  coupon?: string
}

type Output = {
  total: number
}