import { IsNotEmpty, IsEmail } from "class-validator"

export class LoginUserDTO {

    @IsNotEmpty()
    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    readonly password: string
    
}