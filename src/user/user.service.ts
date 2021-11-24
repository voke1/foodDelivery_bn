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
            const foundUser = await this.clientModel.findOne({email: user.email});
            if (foundUser) {
                return this.responseService.clientError(
                    res,
                    'User already exist',
                );
            }
            user.password = await bcrypt.hash(user.password, 6);
            const userCreated = await new this.clientModel(user)
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
            const foundUser = await this.clientModel.findOne({email: user.email});
            if (foundUser) {
                const token = await TokenService.getToken({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }, '30d');
                user.token = token;
             
                return this.responseService.requestSuccessful(res, user);
            }else{
                return this.responseService.clientError(
                    res,
                    'User not found',
                );

            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }
}
