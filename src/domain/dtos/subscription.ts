export type SubscriptionDto = {
  id: number;
  userId: string;
  products: string[];
  price: number;
  createdAt?: Date;
};
