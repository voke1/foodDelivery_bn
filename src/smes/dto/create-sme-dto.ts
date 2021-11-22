export class CreateSmeDto {
  readonly id?: string;
  readonly asset_category: string;
  readonly businsess_address: string;
  readonly business_premise: string;
  readonly business_name: string;
  readonly employment_category: string;
  readonly general_services: string;
  readonly manufacturing: string;
  readonly trading: string;
  readonly registration_number: string;
  readonly specialised_services: string;
  readonly ownership_type: string;
  readonly phone_number: string;
  readonly email: string;
  readonly date: Date;
  readonly isAdmin: boolean;
}
