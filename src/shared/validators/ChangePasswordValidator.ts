import { IsNotEmpty, IsString } from "class-validator";

export class ChangePasswordValidator {
  @IsString()
  @IsNotEmpty({ message: "please enter your old password" })
  currentpassword: string;

  @IsString()
  @IsNotEmpty({ message: "please enter your old password" })
  newpassword: string;

  @IsString()
  @IsNotEmpty({ message: "please enter your old password" })
  repeatpassword: string;
}
