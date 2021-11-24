export class CreateMarketDto {
  readonly id?: string;
  readonly customerId: string;
  readonly orderId: string;
  readonly paymentDate: string;
  readonly amount: number;
  readonly paymentType: string;
  readonly date: Date;
}
