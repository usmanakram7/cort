import { useFormik } from "formik";
import React from "react";
import { LoginFormValidator } from "../../shared/validators/LoginFormValidator";
import { FormikValidator } from "../../shared/utility";
import { FormikErrorMessage } from "./FormikErrorMessage";
import passwordHide from "../assets/icons/eye-slash.svg";
import password from "../assets/icons/eyeclose.svg";

type PasswordInputProps = {
  label: string;
  value: string;
  onPasswordChange: (password: string) => void;
  showPassword: boolean;
  onToggleShowPassword: () => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onPasswordChange,
  showPassword,
  onToggleShowPassword,
}) => {
  const LoginFormik = useFormik<LoginFormValidator>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Submit Values ==>", values);
    },

    validate: FormikValidator.validator(LoginFormValidator),
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <input
          className=" outline-none border-none w-full"
          type={showPassword ? "text" : "password"}
          value={value}
          placeholder="Enter your password here"
          onChange={(event) => onPasswordChange(event.target.value)}
        />
        <FormikErrorMessage
          formik={LoginFormik}
          name="email"
          render={(error) => (
            <span className="error mt-1 text-rose-500">{error}</span>
          )}
        />
        <button onClick={onToggleShowPassword}>
          {showPassword ? (
            <img src={password} alt="hide" />
          ) : (
            <img src={passwordHide} alt="hide" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
