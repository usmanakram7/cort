import React, { useState } from "react";
import { useAuthContext } from "../../shared/contexts";
import { useNavigate } from "react-router-dom";
const ResetImage = require("../../app/assets/images/passwordchangelock.png");
const cross = require("../../app/assets/images/cross.png");
const lockImage = require("../../app/assets/images/confirmpasswodchangedlogo.png");

type showModalProps = {
  handleModal: () => void;
  modal1: boolean;
};

const EditUserPasswordConfirmedChangeModal = (props: showModalProps) => {
  const [modal3, setModal3] = useState<boolean>(false);
  const [confirmedChangePassword, setConfirmedChangePassword] =
    useState<boolean>(false);
  const [closeConfirmModal, setCloseConfirmModal] = useState<boolean>(false);

  const handleModal = () => {
    setCloseConfirmModal(!closeConfirmModal);
  };

  const handleConfirmChangePassword = () => {
    setConfirmedChangePassword(!confirmedChangePassword);
  };
  const handleNextModal = () => {
    setModal3(!modal3);
    handleConfirmChangePassword();
  };

  const context = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    context.updateUser(null, null);
    navigate("/login");
  };

  return (
    <>
      {!closeConfirmModal ? (
        <>
          {!modal3 && (
            <div className="w-full h-screen bg-[#3D4D53]/50 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
              <div
                className={`fixed bg-[#fff] w-[500px] flex p-[20px] items-center flex-col rounded-xl transition-all ease-in duration-1000  ${
                  props.modal1 ? "fixed " : ""
                }`}
              >
                <div className="float-right w-full">
                  <img
                    onClick={handleNextModal}
                    className="float-right w-[20px] h-[20px] cursor-pointer"
                    src={cross}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center flex-col">
                  <img
                    src={lockImage}
                    alt="reset-password"
                    className="w-[192px] h-[120px] m-auto"
                  />
                  <h1 className="text-[24px] font-semibold color-[#3D4D53] text-center mt-[14px] w-[75%]">
                    Your password has been changed Successfully.
                  </h1>
                  <p className="font-normal text-[16px] text-center w-[80%] mt-[14px]">
                    Thank you for taking the time to update your password. Your
                    account is now secure.
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="mb-[10px] w-full font-medium text-base leading-[150%] mt-[24px] text-[#E7E7E7] bg-Maincolor py-[13px] px-[28px] rounded-lg float-right"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default EditUserPasswordConfirmedChangeModal;
