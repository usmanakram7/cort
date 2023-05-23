import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/ShowHidePasswordInput";
import ResetPasswordModal from "../../components/ResetPasswordModal";
import { useFormik } from "formik";
import { FormikValidator } from "../../../shared/utility";
import { LoginFormValidator } from "../../../shared/validators/LoginFormValidator";
import { FormikErrorMessage } from "../../components/FormikErrorMessage";
import circleLines from "../../assets/images/circle.png";
import loginImg from "../../assets/images/login.png";
import cortLogo from "../../assets/images/cort.png";
import eye from "../../assets/icons/eye-slash.svg";
import closeeye from "../../assets/icons/eyeclose.svg";
import { API } from "../../../api";
import { useAuthContext } from "../../../shared/contexts";
import { loginExtraMeta } from "../../../shared/interfaces";
const sms = require("../../assets/images/sms.png");
const lock = require("../../assets/images/lock.png");

const Login = () => {
  const [modal1, setModal1] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleModal = () => {
    setModal1(!modal1);
  };

  const navigate = useNavigate();
  const context = useAuthContext();

  const LoginFormik = useFormik<LoginFormValidator>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const data: loginExtraMeta = {
        deviceId: "device_ID",
        deviceName: "device_NAME",
        deviceType: "device_TYPE",
        fcm: "0077",
      };
      API.auth
        .login({ ...values, ...data })
        .then((response) => {
          console.log("User loggedIn", response.data.access_token);
          context.updateUser(response.data, response.data.access_token);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log("user not match!", error);
          LoginFormik.setErrors({
            password: "The provided credentials do not match our records.",
          });
        });
    },
    validate: FormikValidator.validator(LoginFormValidator),
  });

  return (
    <>
      {/* Modal-1 */}
      {modal1 && (
        <ResetPasswordModal handleModal={handleModal} modal1={modal1} />
      )}

      {/*  */}
      <div className="flex w-full p-0.5">
        <img className="h-sidebar w-full rounded-l-xl" src={loginImg} alt="" />
        <div className="w-full h-sidebar bg-white rounded-r-xl">
          <div className="flex flex-col gap-160px relative px-75px py-60px">
            <div>
              <img src={cortLogo} alt="" />
            </div>
            <img className="absolute top-0 right-0" src={circleLines} alt="" />
            <div className="flex flex-col gap-9">
              <div>
                <h1 className="font-bold text-5xl leading-[150%] font-poppins text-Maincolor">
                  Welcome Back :)
                </h1>
                <p className="font-normal text-base font-poppins leading-[150%] text-Primarycolor">
                  Please Enter Your Login Details Below
                </p>
              </div>
              <form onSubmit={LoginFormik.handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="flex  flex-col">
                    <div className="gap-[13px] border border-solid border-Stroke rounded-lg p-[13px] flex">
                      <img className="w-[24px] h-[24px]" src={sms} alt="" />
                      <input
                        className="border-none outline-none w-full bg-transparent"
                        type="email"
                        name="email"
                        placeholder="Enter your email here"
                        onChange={LoginFormik.handleChange}
                        onBlur={LoginFormik.handleBlur}
                      />
                    </div>
                    <FormikErrorMessage
                      formik={LoginFormik}
                      name="email"
                      render={(error) => (
                        <span className="error mt-1 text-rose-500">
                          {error}
                        </span>
                      )}
                    />
                  </div>
                  <div className="border gap-13px rounded-[10px] border-[#D8DBDD] mt-[9px] flex py-[13px] px-[16px] items-center justify-between w-full">
                    <img className="w-[24px] h-[24px]" src={lock} alt="" />
                    <input
                      className="border-none outline-none w-full bg-transparent"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      onChange={LoginFormik.handleChange}
                      onBlur={LoginFormik.handleBlur}
                    />
                    <div onClick={handleShowPassword}>
                      {showPassword ? (
                        <img className="cursor-pointer" src={eye} alt="open" />
                      ) : (
                        <img
                          className="cursor-pointer"
                          src={closeeye}
                          alt="close"
                        />
                      )}
                    </div>
                  </div>
                  <FormikErrorMessage
                    formik={LoginFormik}
                    name="password"
                    render={(error) => (
                      <span className="error -mt-3 text-rose-500">{error}</span>
                    )}
                  />

                  <p className="font-normal text-base font-poppins leading-[150%] text-Primarycolor">
                    Have you forgotten your password?
                    <span
                      onClick={handleModal}
                      className="cursor-pointer font-normal text-base font-poppins leading-[150%] text-[#E22828] underline"
                    >
                      {" "}
                      Reset Password
                    </span>
                  </p>
                  <button
                    type="submit"
                    className="font-bold text-base font-poppins leading-[150%] text-[#E7E7E7] bg-Maincolor py-4 rounded-lg"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
