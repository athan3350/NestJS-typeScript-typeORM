import { Body, Controller, Get, Post, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDTO } from '@app/user/dto/createUser.dto';
import { UserResponseInterface } from '@app/user/types/userResponse.interface';
import { LoginUserDTO } from '@app/user/dto/loginUser.dto';
import { ExpressRequest } from '@app/types/expressRequest.interface';

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) { }

    @UsePipes(new ValidationPipe())
    @Post('users')
    async createUser(@Body('user') createUserDTO: CreateUserDTO): Promise<UserResponseInterface> {
        const user = await this.userService.createUser(createUserDTO);
        return this.userService.buildUserResponse(user);
    }


    @Post('users/login')
    @UsePipes(new ValidationPipe())
    async login(
        @Body('user') loginDTO: LoginUserDTO
    ): Promise<UserResponseInterface> {
        const user = await this.userService.login(loginDTO);
        return this.userService.buildUserResponse(user);
    }


    @Get('user')
    async currentUser(@Req() request: ExpressRequest): Promise<UserResponseInterface> {
        return this.userService.buildUserResponse(request.user);

    }




}
