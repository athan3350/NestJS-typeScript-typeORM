import { Body, Controller, Get, Post, UsePipes, ValidationPipe, UseGuards, Put } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDTO } from '@app/user/dto/createUser.dto';
import { UserResponseInterface } from '@app/user/types/userResponse.interface';
import { LoginUserDTO } from '@app/user/dto/loginUser.dto';
import { User } from '@app/user/decorator/user.decorator';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { UserEntity } from '@app/user/user.entity';
import { UpdateUserDTO } from '@app/user/dto/updateUser.dto';

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
    @UseGuards(AuthGuard)
    async currentUser(@User() user: UserEntity): Promise<UserResponseInterface> {
        return this.userService.buildUserResponse(user);

    }

    @Put('user')
    @UseGuards(AuthGuard)
    async updateUser(@User('id') userCurrentId : number,
        @Body('user') updateUserDto: UpdateUserDTO
     ): Promise<UserResponseInterface> {
        const user = await this.userService.updateUser(userCurrentId, updateUserDto);
        return this.userService.buildUserResponse(user);

    }
}
