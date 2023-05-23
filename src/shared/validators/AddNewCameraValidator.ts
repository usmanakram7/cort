import { IsNotEmpty, IsString } from "class-validator";

export class AddNewCameraValidator {
  @IsString()
  @IsNotEmpty({ message: "Must enter the name" })
  name: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString()
  password: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString()
  address: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString()
  model: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString()
  port: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString()
  make: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString()
  username: string;

  @IsNotEmpty({ message: "Must Enter your Password" })
  @IsString()
  path: string;

  @IsNotEmpty({ message: "Must select at least one option" })
  transport_protocol: string;

  @IsNotEmpty({ message: "Must select at least one option" })
  application_protocol: string;

  pulse_index: number;
}
