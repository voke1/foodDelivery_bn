import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Body,
    Req,
    Res,
    Param,
    UseGuards,
    Query,
} from '@nestjs/common';
import {OrdersService } from './order.service';
import { Order } from './interfaces/order.interface';
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class OrdersController {

    constructor(private orderService: OrdersService) { }


    @Post('market')
    @UseGuards(new AuthGuard())
    createMarket(
        @Body() Order: Order,

    ): Promise<Order> {
        return this.orderService.createOrder(Order);
    }

    @Get('Order/all')
    findOrders(): Promise<Order[]> {
        return this.orderService.getOrders();
    }

    @Get('Order/:OrderId')
    findOrder(@Param('OrderId') OrderId): Promise<Order[]> {
        return this.orderService.getOrder(OrderId);
    }


    @Delete('Order/:OrderId')
    @UseGuards(new AuthGuard())
    delete(@Param('OrderId') id): Promise<Order> {
        return this.orderService.delete(id);
    }
}
