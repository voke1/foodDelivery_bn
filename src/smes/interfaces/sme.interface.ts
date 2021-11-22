
export interface Sme extends Document {
   id?: string;
   asset_category: string;
   businsess_address: string;
   business_premise: string;
   business_name: string;
   employment_category: string;
   general_services: string;
   manufacturing: string;
   trading: string;
   registration_number: string;
   specialised_services: string;
   ownership_type: string;
   phone_number: string;
   email: string;
   date: Date;
   isAdmin: boolean;
}
