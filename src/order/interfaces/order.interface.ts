
export interface Order extends Document {
    id?: string;
    orderDate: Date;
    customerId: string;
    quantity: string;
    pickupDate: string;
    imageUrl: string;
}

