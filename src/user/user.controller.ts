import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDTO } from '@app/user/dto/createUser.dto';
import { UserResponseInterface } from '@app/user/types/userResponse.interface';

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('users')
    async createUser(@Body('user') createUserDTO: CreateUserDTO): Promise<UserResponseInterface> {
        const user = await this.userService.createUser(createUserDTO);
        return this.userService.buildUserResponse(user);
    }
}
