export class CreateMarketDto {
  readonly id?: string;
  readonly name: string;
  readonly description: string;
  readonly geolocation: object;
  readonly category: string;
  readonly imageUrl: string;
  readonly date: Date;
}
