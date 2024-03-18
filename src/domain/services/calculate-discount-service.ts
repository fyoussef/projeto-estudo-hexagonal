import { ProductDto } from "../dtos/product";

export class CalculateDiscountService {
  execute(input: ProductDto[]) {
    let priceWithDiscount = 0;
    let priceWithoutDiscount = 0;
    let percentualDiscount = 0;
    const totalProducts = input.length;
    if (totalProducts > 5) {
      const restProducts = input.slice(5, input.length);
      priceWithoutDiscount = restProducts.reduce(
        (acc, product) => (acc += product.price),
        0
      );
    }
    const productsForDiscount = input.slice(0, 5);
    priceWithDiscount = productsForDiscount.reduce(
      (acc, product) => (acc += product.price),
      0
    );
    for (let i = 0; i < productsForDiscount.length; i++) {
      percentualDiscount += i < 2 ? 0.025 : 0.05;
    }
    return this.calculate(priceWithDiscount, percentualDiscount);
  }

  private calculate(price: number, discount: number): number {
    return price - price * discount;
  }
}
