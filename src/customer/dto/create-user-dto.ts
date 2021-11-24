export class CreateCustomerDto {
  readonly id?: string;
  readonly firstName: string;
  readonly foodId: string;
  readonly paymentId: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly date: Date;
}
