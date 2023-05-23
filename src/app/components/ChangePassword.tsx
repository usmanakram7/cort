import React, { useState } from "react";

import EYE from "../assets/icons/eyeclose.svg";
import CLOSEYE from "../assets/icons/eye-slash.svg";
const ResetImage = require("../../app/assets/images/change-password.png");
const cross = require("../../app/assets/images/cross.png");
type showModalProps = {
  modal1: boolean;
};

const ChangePasswordModal = (props: showModalProps) => {
  const [modal3, setModal3] = useState<boolean>(false);

  const handleNextModal = () => {
    setModal3(!modal3);
  };

  const [eyePassword2, setEyePassword2] = useState<boolean>(true);
  const [eyePassword3, setEyePassword3] = useState<boolean>(true);

  const handleClickEyePassword2 = () => {
    setEyePassword2((prevState) => !prevState);
  };

  const handleClickEyePassword3 = () => {
    setEyePassword3((prevState) => !prevState);
  };

  return (
    <>
      {!modal3 && (
        <div className="w-full h-screen bg-[#3D4D53]/50 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
          <div
            className={`fixed bg-[#fff] w-[500px] flex items-center flex-col rounded-xl transition-all ease-in duration-1000  ${
              props.modal1 ? "fixed " : ""
            }`}
          >
            <div className="float-right w-full p-4">
              <img
                onClick={handleNextModal}
                className="float-right w-[20px] h-[20px] cursor-pointer"
                src={cross}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                src={ResetImage}
                alt="reset-password"
                className="w-[151px]  m-auto"
              />
              <div className="flex items-center flex-col mt-[24px] gap-[6px ]">
                <h1 className=" text-[24px] font-semibold color-[#3D4D53] text-center ">
                  Change Password
                </h1>
                <p className="font-normal text-[16px] text-center w-[70%]">
                  Enter your new password and confirm again
                </p>
              </div>
            </div>
            <div className="w-full px-[30px] pb-[30px] mt-4">
              <div className="mt-4">
                <label>New Password</label>
                <div className="px-[16px] py-[12px] border-2 rounded-xl mt-[4px] w-full border-[#D8DBDD] relative">
                  <input
                    className="w-full outline-none border-none"
                    name="newpassword"
                    type={eyePassword2 ? "text" : "password"}
                    placeholder="New Password"
                  />
                  <div
                    className="absolute right-4 top-3"
                    onClick={handleClickEyePassword2}
                  >
                    {eyePassword2 ? (
                      <img
                        className="cursor-pointer"
                        src={CLOSEYE}
                        alt="Eye Close"
                      />
                    ) : (
                      <img className="cursor-pointer" src={EYE} alt="" />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label>Confirm Password</label>
                <div className="px-[16px] py-[12px] border-2 rounded-xl mt-[4px] w-full border-[#D8DBDD] relative">
                  <input
                    className="w-full outline-none border-none"
                    name="confirmpassword"
                    type={eyePassword3 ? "text" : "password"}
                    placeholder="Confirm Password"
                  />
                  <div
                    className="absolute right-4 top-3"
                    onClick={handleClickEyePassword3}
                  >
                    {eyePassword3 ? (
                      <img
                        className="cursor-pointer"
                        src={CLOSEYE}
                        alt="Eye Close"
                      />
                    ) : (
                      <img className="cursor-pointer" src={EYE} alt="" />
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={handleNextModal}
                className="font-medium text-base leading-[150%] mt-[24px] text-[#E7E7E7] bg-Maincolor py-[13px] px-[28px] rounded-lg float-right"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePasswordModal;
