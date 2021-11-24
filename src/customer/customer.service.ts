import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TokenService } from '../utils/jwt.service';
import { ResponseService } from '../utils/response-handler.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel('Customer') private customerModel: Model<Customer>,
        private responseService: ResponseService,
    ) { }

    async signUp(customer, res): Promise<Customer> {
        try {
            const foundUser = await this.customerModel.findOne({email: customer.email});
            if (foundUser) {
                return this.responseService.clientError(
                    res,
                    'Customer already exist',
                );
            }
            customer.password = await bcrypt.hash(customer.password, 6);
            const userCreated = await new this.customerModel(customer)
            if (userCreated) {
                userCreated.save()
                return this.responseService.requestSuccessful(res, customer);
            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }

    async signIn(customer, res): Promise<Customer> {
        try {
            const foundUser = await this.customerModel.findOne({email: customer.email});
            if (foundUser) {
                const token = await TokenService.getToken({
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    email: customer.email,
                }, '30d');
                customer.token = token;
             
                return this.responseService.requestSuccessful(res, customer);
            }else{
                return this.responseService.clientError(
                    res,
                    'Customer not found',
                );

            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }

    async getCustomer(customerId): Promise<Customer[]> {
            return await this.customerModel.findById({ _id: customerId });
        
    }

    async getCustomers(): Promise<[]> {
        return await this.customerModel.find();
    }


    async delete(id: string): Promise<Customer> {
        return await this.customerModel.findByIdAndRemove(id);
    }

}
