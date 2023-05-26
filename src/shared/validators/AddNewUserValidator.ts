import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AddNewUserValidator {
  @IsString()
  @IsNotEmpty({ message: "Must enter the name" })
  firstname: string;

  @IsString()
  @IsNotEmpty({ message: "Must enter the name" })
  lastname: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty({ message: "Must enter the email address" })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Must enter the phone number" })
  phonenumber: string;

  @IsString()
  @IsNotEmpty({ message: "create a password" })
  password: string;

  @IsString()
  @IsNotEmpty({ message: "Must enter the role" })
  roles: string;

  @IsNotEmpty({ message: "Must select at least one camera" })
  cameras: string;
}
