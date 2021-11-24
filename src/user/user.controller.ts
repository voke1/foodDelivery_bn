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
import {UserService } from './user.service';
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

        return await this.UserService.signUp(user, res);
    }

    
    @Post('auth/user/signin')
    async Signin(
        @Body() user: User,
        @Req() req,
        @Res() res,
    ): Promise<User> {
        return await this.UserService.signIn(user, res);
    }


}
