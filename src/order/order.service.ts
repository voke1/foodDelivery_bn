import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/order.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel('Order') private OrderModel: Model<Order>,
    ) { }

    async createOrder(order) {
        const newOrder = new this.OrderModel(order);

        try {
            const order = await newOrder.save();
            console.log('Order saved: ', order)
            if (order) {
                return {
                    success: true,
                    message: 'Order has been successfully saved',
                    order
                };
            }
            return {
                success: false,
                message: 'Order not saved. Please try again',
            };
        } catch (e) {
            return (e.message);
        }
    }
    async getOrder(orderId): Promise<Order[]> {
            return await this.OrderModel.findById({ _id: orderId });
        
    }

    async getOrders(): Promise<[]> {
        return await this.OrderModel.find();
    }


    async delete(id: string): Promise<Order> {
        return await this.OrderModel.findByIdAndRemove(id);
    }

}
