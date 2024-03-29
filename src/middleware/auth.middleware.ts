import { Injectable, NestMiddleware } from '@nestjs/common';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TokenService } from '../utils/jwt.service';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request) {
      if (!request.headers.authorization) {
        return false;
      }
      request.user = await this.validateToken(request.headers.authorization);
      return true;
    }
  }

  async validateToken(auth: string) {
    console.log('auth: ', auth)
    console.log('token: ', (auth.split(' ')[0]))
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const token = auth.split(' ')[1];
    const reshuffledToken = await TokenService.shuffleToken(token);

    try {
      const decoded: any = await jwt.verify(reshuffledToken, process.env.SECRET_KEY);

      return decoded;
    } catch (err) {
      const message = 'Token error: ' + (err.message || err.name);
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
    }
  }
}

