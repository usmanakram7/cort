import {IsEmail, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class EditUserValidator {
    @IsString()
    @IsNotEmpty({message: "Invalid First Name"})
    firstname: string;

    @IsString()
    @IsNotEmpty({message: "Invalid Last Name"})
    lastname: string;

    @IsString()
    @IsNotEmpty({message: "Invalid Email"})
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty({message: "Invalid Phone Number"})
    @IsNumber()
    phonenumber: string;

    @IsString()
    @IsNotEmpty({message: "Invalid Password"})
    password: string;

    @IsString()
    @IsNotEmpty({message: "Invalid Role"})
    role: string;
}