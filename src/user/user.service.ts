import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '@app/user/dto/createUser.dto';
import { UserEntity } from '@app/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}
    async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
        const newUser = new UserEntity()
        Object.assign(newUser, createUserDTO);
        return await this.userRepository.save(newUser);
    }
 }
