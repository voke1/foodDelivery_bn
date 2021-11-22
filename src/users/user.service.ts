import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TokenService } from '../utils/jwt.service';
import { ResponseService } from '../utils/response-handler.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private clientModel: Model<User>,
        private responseService: ResponseService,
    ) { }

    async signUp(user, res): Promise<User> {
        try {
            const foundUser = await this.clientModel.findOne({ email: user.email });
            if (foundUser) {
                return this.responseService.clientError(
                    res,
                    'User already exist',
                );
            }
            user.pin = await bcrypt.hash(user.pin, 6);
            const userCreated = await new this.clientModel(user);
            if (userCreated) {
                userCreated.save()
                return this.responseService.requestSuccessful(res, user);
            }
        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }

    async signIn(user, res): Promise<User> {
        try {
            const foundUser = await this.clientModel.findOne({ phone: user.phone });
            if (foundUser) {
                const token = await TokenService.getToken({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }, '30d');
                user.token = token;

                return this.responseService.requestSuccessful(res, user);
            } else {
                return this.responseService.clientError(
                    res,
                    'User not found',
                );
            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }



    async getProfile(phone, res): Promise<User> {
        try {
            const user = await this.clientModel.findOne({ phone });
            if (user) {

                return this.responseService.requestSuccessful(res, user);
            } else {
                return this.responseService.clientError(
                    res,
                    'User not found',
                );
            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }
    }


    async updateProfile(user, id, res): Promise<User> {
        try {
            const response = await this.clientModel.findByIdAndUpdate(id, user, { new: true });
            if (response) {

                return this.responseService.requestSuccessful(res, response);
            } else {
                return this.responseService.clientError(
                    res,
                    'Error!, User not updated',
                );
            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }


    async changePassword(user, email, res): Promise<User> {
        try {

            const response = await this.clientModel.findOne({email});
           
            if(user.new_password !== user.new_password_confirmation){
                return this.responseService.clientError(
                    res,
                    'Error! please confirm new password!',
                );
            } else if (user.current_password !== response.password){

                return this.responseService.clientError(
                    res,
                    'please confirm current password!',
                );
            }
            else {
                const result = await this.clientModel.updateOne(
                    { password: user.new_password },
                );
                return this.responseService.requestSuccessful(res, result);
            } 

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }

}
