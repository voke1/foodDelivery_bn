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
import {CustomerService } from './customer.service';
import { Customer } from './interfaces/customer.interface'
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class CustomerController {
    constructor(private readonly CustomerService: CustomerService) { }



    @Post('auth/customer/signup')
    async Signup(
        @Body() customer: Customer,
        @Req() req,
        @Res() res,
    ): Promise<Customer> {

        return await this.CustomerService.signUp(customer, res);
    }

    
    @Post('auth/customer/signin')
    async Signin(
        @Body() customer: Customer,
        @Req() req,
        @Res() res,
    ): Promise<Customer> {
        return await this.CustomerService.signIn(customer, res);
    }

    @Get('customer/all')
    findMarkets(): Promise<Customer[]> {
        return this.CustomerService.getCustomers();
    }

    @Get('customer/:customerId')
    findCustomer(@Param('customerId') customerId): Promise<Customer[]> {
        return this.CustomerService.getCustomer(customerId);
    }


    @Delete('customer/:customerId')
    @UseGuards(new AuthGuard())
    delete(@Param('customerId') id): Promise<Customer> {
        return this.CustomerService.delete(id);
    }


}
