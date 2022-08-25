import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '@app/user/dto/createUser.dto';
import { UserEntity } from '@app/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken'
import secretConstants from '@app/constants/secretConstants'
import { UserResponseInterface } from '@app/user/types/userResponse.interface'
import { LoginUserDTO } from '@app/user/dto/loginUser.dto';
import {compare} from 'bcrypt';
import { UpdateUserDTO } from '@app/user/dto/updateUser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }
    
    async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
        const userByEmail = await this.userRepository.findOne({ where: { email: createUserDTO.email } });
        const userByUsername = await this.userRepository.findOne({ where: { username: createUserDTO.username } });

        if (userByEmail || userByUsername) throw new HttpException('Email or username are taken', HttpStatus.UNPROCESSABLE_ENTITY);

        const newUser = new UserEntity()
        Object.assign(newUser, createUserDTO);
        return await this.userRepository.save(newUser);
    }


    async updateUser(idUser: number, updateUserDTO: UpdateUserDTO): Promise<UserEntity> {

        const user = await this.findById(idUser);

        Object.assign(user, updateUserDTO);

        return await this.userRepository.save(user);
    }


    async login(LoginUserDTO : LoginUserDTO) : Promise<UserEntity> {
     

        const user = await this.userRepository.findOne({
            where : {
                email: LoginUserDTO.email
            },
            select: {
                id: true,
                username: true,
                email: true,
                bio: true,
                image: true,
                password: true
            }
        })
        
        if(!user) {
            throw new HttpException('Creadentials are not valid', HttpStatus.UNPROCESSABLE_ENTITY)
        }

        const isPasswordCorrect = await compare(LoginUserDTO.password, user.password)

        if(!isPasswordCorrect) {
            throw new HttpException('Creadentials are not valid', HttpStatus.UNPROCESSABLE_ENTITY)
        }
        
        delete user.password;
        
        return user;

    }

    async findById(id: number): Promise<UserEntity> {


        return this.userRepository.findOne({
            where : {
                id: id
            }
        })
    }

    generateJwt(user: UserEntity): string {
        return sign({
            id: user.id,
            username: user.username,
            email: user.email,
        }, secretConstants.JWT_SECRET_KEY)
    }

    buildUserResponse(user: UserEntity): UserResponseInterface {
        return {
            user: {
                ...user,
                token: this.generateJwt(user)
            }
        }
    }
}
