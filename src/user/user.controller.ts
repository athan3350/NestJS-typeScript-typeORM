import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDTO } from '@app/user/dto/createUser.dto';
import { UserEntity } from '@app/user/user.entity';

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('users')
    async createUser(@Body('user') createUserDTO: CreateUserDTO): Promise<UserEntity> {
        return this.userService.createUser(createUserDTO);
    }
}
