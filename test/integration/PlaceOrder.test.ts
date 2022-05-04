// import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrder from "../../src/application/usecase/PlaceOrder";
import Item from "../../src/domain/entity/Item";
import Dimension from "../../src/domain/entity/Dimension";

test("Deve fazer um pedido", async function() {
  const itemRepository = new ItemRepositoryMemory();
  itemRepository.save(new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3));
  itemRepository.save(new Item(2, "Amp", 5000, new Dimension(100, 50, 50), 20));
  itemRepository.save(new Item(3, "Cable", 30, new Dimension(10, 10, 10), 1));
  const orderRepository = new OrderRepositoryMemory();
  // const couponRepository = new CouponRepositoryMemory();
  const placeOrder = new PlaceOrder(
    itemRepository,
    orderRepository
    // couponRepository
  );
  const input = {
    cpf: "935.411.347-80",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 }
    ]
    // coupon: "VALE20"
  }
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(6350); //4872 with coupon
});