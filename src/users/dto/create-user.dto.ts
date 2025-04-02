import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator"

export class CreateUsersDto{

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password : string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    @Max(100)
    age : number
}