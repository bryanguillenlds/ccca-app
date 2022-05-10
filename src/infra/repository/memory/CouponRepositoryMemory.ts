import Coupon from "../../../domain/entity/Coupon";
import CouponRepository from "../../../domain/repository/CouponRepository";

export default class CouponRepositoryMemory implements CouponRepository {
  coupons: Coupon[];

  constructor() {
    this.coupons = [
      new Coupon("VALE20", 20)
    ];
  }
  
  async save(coupon: Coupon): Promise<void> {
    this.coupons.push(coupon);
  }

  async getByCode(code: string): Promise<Coupon> {
    const coupon = this.coupons.find(coupon => coupon.code === code);
    if (!coupon) throw new Error("Coupon not found");
    return coupon;
  }
}