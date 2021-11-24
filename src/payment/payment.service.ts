import { Injectable } from '@nestjs/common';
import { Payment } from './interfaces/payment.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PaymentService {

    constructor(
        @InjectModel('Payment') private paymentModel: Model<Payment>,
    ) { }

    async createPayment(payment) {
        const newPayment = new this.paymentModel(payment);

        try {
            const Payment = await newPayment.save();
            console.log('Payment saved: ', Payment)
            if (Payment) {
                return {
                    success: true,
                    message: 'Payment has been successfully saved',
                    Payment
                };
            }
            return {
                success: false,
                message: 'Payment not saved. Please try again',
            };
        } catch (e) {
            return (e.message);
        }
    }
    async getPayment(paymentId): Promise<Payment[]> {
            return await this.paymentModel.findById({ _id: paymentId });
        
    }

    async getPayments(): Promise<[]> {
        return await this.paymentModel.find();
    }


    async delete(id: string): Promise<Payment> {
        return await this.paymentModel.findByIdAndRemove(id);
    }

}
