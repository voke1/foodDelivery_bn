export class CreateClientDto {
  readonly id?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly date: Date;
  readonly isAdmin: boolean;
}
