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
import { UserService } from './user.service';
import { User } from './interfaces/user.interface'

@Controller('api/v1')
export class UserController {
    constructor(private readonly UserService: UserService) { }



    @Post('auth/user/signup')
    async Signup(
        @Body() user: User,
        @Req() req,
        @Res() res,
    ): Promise<User> {
        console.log('This is User: ', user)
        return await this.UserService.signUp(user, res);
    }


    @Post('auth/user/signin')
    async Signin(
        @Body() user: User,
        @Req() req,
        @Res() res,
    ): Promise<User> {
        console.log('This is User: ', user)
        return await this.UserService.signIn(user, res);
    }

    @Get('profile/:id')
    async findProfile(
        @Param('id') id,
        @Req() req,
        @Res() res,
    ): Promise<User> {
        console.log('This is Email: ', id)
        return await this.UserService.getProfile(id, res);
    }

    @Put('profile/:phone')
    async searchProfile(
        @Param('phone') phone,
        @Body() user,
        @Req() req,
        @Res() res,
    ): Promise<User> {
        return await this.UserService.updateProfile(user, phone, res);
    }
    @Put('profile/update/:id')
    async updateProfile(
        @Param('id') id,
        @Body() user,
        @Req() req,
        @Res() res,
    ): Promise<User> {
        console.log('This is Email: ', id)
        return await this.UserService.changePassword(user, id, res);
    }




}
