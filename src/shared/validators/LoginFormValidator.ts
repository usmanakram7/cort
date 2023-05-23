import { IsNotEmpty, IsString } from "class-validator";

export class LoginFormValidator {
  @IsNotEmpty({ message: "Must enter your email address" })
  email: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString()
  password: string;
}
