export class CreateOrderDto {
  readonly id?: string;
  readonly orderDate: Date;
  readonly customerId: string;
  readonly quantity: object;
  readonly pickupDate: string;
  readonly imageUrl: string;
}
