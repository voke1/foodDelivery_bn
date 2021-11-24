
export interface Payment extends Document {
id?: string;
customerId: string;
orderId: string;
paymentDate: string;
amount: number;
paymentType: string;
date: Date;
}




