
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Accomodation = createParamDecorator( (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (!request.id) {
        null;
    }

    if (data) {
        return request[data];
    }

    return request;
    
  });