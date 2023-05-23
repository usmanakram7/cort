import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import OTPConfirmation from "./OTPConfirmation";
const ResetImage = require("../../app/assets/images/resetpassword.png");
const cross = require("../../app/assets/images/cross.png");

type showModalProps = {
  handleModal: () => void;
  modal1: boolean;
};

const ResetPasswordModal = (props: showModalProps) => {
  const [modal2, setModal2] = useState<boolean>(false);

  const handleNextModal = () => {
    setModal2(!modal2);
  };

  return (
    <>
      {modal2 ? (
        <OTPConfirmation
          handleModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          modal1={false}
        />
      ) : (
        <div className="w-full h-screen bg-[#3D4D53]/50 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
          <div
            className={`fixed bg-[#fff] max-w-[460px]  flex items-center flex-col rounded-xl transition-all ease-in duration-1000  ${
              props.modal1 ? "fixed " : ""
            }`}
          >
            <div className="w-full p-[16px]">
              <img
                onClick={props.handleModal}
                className="float-right w-[20px] h-[20px] cursor-pointer"
                src={cross}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                src={ResetImage}
                alt="reset-password"
                className="w-[160px]  m-auto"
              />
              <h1 className="text-[24px] font-semibold color-[#3D4D53] text-center mt-[14px] ">
                Forget Password
              </h1>
              <p className="font-normal text-[16px] text-center w-[70%] mt-[14px]">
                Enter your email address to reset the password!
              </p>
            </div>
            <div className="p-[30px]">
              <label>Email Address</label>
              <input
                className="w-full px-[16px] py-[13px] border-2 rounded-xl mt-[6px]  border-[#D8DBDD]"
                type="email"
                placeholder="Example@mail.com"
              />
              <button
                onClick={handleNextModal}
                className="font-bold text-base leading-[150%] mt-[24px] text-[#E7E7E7] bg-Maincolor py-4 rounded-lg w-full"
              >
                Send Code
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPasswordModal;
