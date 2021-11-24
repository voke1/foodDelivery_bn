
export interface Customer extends Document {
   id?: string;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   foodId: string;
   paymentId: string;
   date: Date;
}
