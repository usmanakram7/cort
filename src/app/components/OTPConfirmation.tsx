import React, { useState } from "react";
import OptInputs from "./OTPinputs";
import ChangePasswordModal from "./ChangePassword";
const optImage = require("../../app/assets/images/otp.png");
const cross = require("../../app/assets/images/cross.png");

type showModalProps = {
  handleModal: () => void;
  modal1: boolean;
};

const OTPConfirmation = (props: showModalProps) => {
  const [modal2, setModal2] = useState<boolean>(false);

  const handleNextModal = () => {
    setModal2(!modal2);
  };

  const [values, setValues] = useState([0, 0, 0, 0]);

  const handleValuesChange = (newValues: number[]) => {
    setValues(newValues);
  };

  return (
    <>
      {!modal2 ? (
        <div className="w-full h-screen bg-[#3D4D53]/50 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
          <div
            className={`fixed bg-[#fff] max-w-[460px]  flex items-center flex-col rounded-xl transition-all ease-in duration-1000  ${
              props.modal1 ? "fixed " : ""
            }`}
          >
            <div className="w-full p-[16px]">
              <img
                onClick={handleNextModal}
                className="float-right w-[20px] h-[20px] cursor-pointer"
                src={cross}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                src={optImage}
                alt="reset-password"
                className="w-[160px]  m-auto"
              />
              <h1 className="text-[24px] font-semibold color-[#3D4D53] text-center mt-[14px] ">
                Enter Your Passcode
              </h1>
              <p className="font-normal text-[16px] text-center w-[70%] mt-[14px]">
                We’ve sent the code to the email on your device
              </p>
            </div>
            <div>
              {" "}
              <OptInputs values={values} onChange={handleValuesChange} />
            </div>
            <div className="p-[30px] w-full">
              <button
                onClick={handleNextModal}
                className="font-bold text-base leading-[150%] mt-[24px] text-[#E7E7E7] bg-Maincolor py-4 rounded-lg w-full"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ChangePasswordModal modal1={false} />
      )}
    </>
  );
};

export default OTPConfirmation;
