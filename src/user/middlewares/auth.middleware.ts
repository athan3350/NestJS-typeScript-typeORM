import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import { ExpressRequest } from '@app/types/expressRequest.interface';
import { verify } from 'jsonwebtoken'
import secretConstants from '@app/constants/secretConstants'
import { UserService } from '@app/user/user.service';

@Injectable()
export class authMiddleware implements NestMiddleware {
constructor(private readonly userService: UserService){}

  async use(req: ExpressRequest, _: Response, next: Function) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(token, secretConstants.JWT_SECRET_KEY)
      const user = await this.userService.findById(decode.id)
      
      req.user = user
      next();
    } catch (err) {
      req.user = null;
      next();
    }

  }
}
