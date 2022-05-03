export default class Coupon {
    
  constructor(readonly code: string, readonly percentage: number, readonly expiredDate?: Date){}

  isExpired(today: Date = new Date()) {
    if (!this.expiredDate) return false;
    return this.expiredDate.getTime() < today.getTime();
  }

  calculateDiscount(total: number) {
    return (total * this.percentage) / 100;
  }
}