import React, { useState } from "react";
import EditUserPasswordConfirmedChangeModal from "./EditUserPasswordConfirmedChangeModal";
import { ChangePasswordValidator } from "../../shared/validators/ChangePasswordValidator";
import { FormikValidator } from "../../shared/utility";
import { useFormik } from "formik";
import { FormikErrorMessage } from "./FormikErrorMessage";
import EYE from "../assets/icons/eyeclose.svg";
import CLOSEYE from "../assets/icons/eye-slash.svg";

const ResetImage = require("../../app/assets/images/passwordchangelock.png");
const cross = require("../../app/assets/images/cross.png");

type showModalProps = {
  handleModal: () => void;
  modal1: boolean;
};

const EditPassword = (props: showModalProps) => {
  const [modal3, setModal3] = useState<boolean>(false);
  const [confirmedChangePassword, setConfirmedChangePassword] =
    useState<boolean>(false);
  const [closeThisModal, setCloseThisModal] = useState<boolean>(false);

  const handleConfirmChangePassword = () => {
    setConfirmedChangePassword(!confirmedChangePassword);
  };
  const handleNextModal = () => {
    setModal3(!modal3);
    handleConfirmChangePassword();
  };
  const handleCloseModal = () => {
    setCloseThisModal(!closeThisModal);
  };

  const ChangePasswordFormik = useFormik<ChangePasswordValidator>({
    initialValues: {
      currentpassword: "",
      newpassword: "",
      repeatpassword: "",
    },
    onSubmit: (values) => {
      console.log("Submit Values ==>", values);
    },

    validate: FormikValidator.validator(ChangePasswordValidator),
  });

  const [eyePassword, setEyePassword] = useState<boolean>(true);
  const [eyePassword2, setEyePassword2] = useState<boolean>(true);
  const [eyePassword3, setEyePassword3] = useState<boolean>(true);
  const handleClickEyePassword = () => {
    setEyePassword((prevState) => !prevState);
  };

  const handleClickEyePassword2 = () => {
    setEyePassword2((prevState) => !prevState);
  };

  const handleClickEyePassword3 = () => {
    setEyePassword3((prevState) => !prevState);
  };

  return (
    <>
      {!closeThisModal && (
        <>
          {confirmedChangePassword ? (
            <EditUserPasswordConfirmedChangeModal
              handleModal={function (): void {
                throw new Error("Function not implemented.");
              }}
              modal1={false}
            />
          ) : null}

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
                      onClick={handleCloseModal}
                      className="float-right w-[20px] h-[20px] cursor-pointer"
                      src={cross}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col">
                    <img
                      src={ResetImage}
                      alt="reset-password"
                      className="w-[151px] h-[120px] m-auto"
                    />
                    <h1 className="text-[24px] font-semibold color-[#3D4D53] text-center mt-[14px] ">
                      Change Password
                    </h1>
                    <p className="font-normal text-[16px] text-center w-[70%] mt-[14px]">
                      Enter your new password and confirm again
                    </p>
                  </div>
                  <div className="w-full p-[30px]">
                    <form
                      action=""
                      onSubmit={ChangePasswordFormik.handleSubmit}
                    >
                      <label>Current Password</label>
                      <div>
                        <div className="px-[16px] py-[12px] border-2 rounded-xl mt-[4px] w-full border-[#D8DBDD] relative">
                          <input
                            className="w-full outline-none border-none"
                            name="currentpassword"
                            type={eyePassword ? "text" : "password"}
                            placeholder="New Password"
                            onChange={ChangePasswordFormik.handleChange}
                            onBlur={ChangePasswordFormik.handleBlur}
                          />
                          <div
                            className="absolute right-4 top-3"
                            onClick={handleClickEyePassword}
                          >
                            {eyePassword ? (
                              <img
                                className="cursor-pointer"
                                src={CLOSEYE}
                                alt="Eye Close"
                              />
                            ) : (
                              <img
                                className="cursor-pointer"
                                src={EYE}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <FormikErrorMessage
                          formik={ChangePasswordFormik}
                          name="currentpassword"
                          render={(error) => (
                            <span className="text-[13px] error mt-1 text-rose-500">
                              {error}
                            </span>
                          )}
                        />
                      </div>
                      <div className="mt-4">
                        <label>New Password</label>
                        <div>
                          <div className="px-[16px] py-[12px] border-2 rounded-xl mt-[4px] w-full border-[#D8DBDD] relative">
                            <input
                              className="w-full outline-none border-none"
                              name="newpassword"
                              type={eyePassword2 ? "text" : "password"}
                              placeholder="New Password"
                              onChange={ChangePasswordFormik.handleChange}
                              onBlur={ChangePasswordFormik.handleBlur}
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
                                <img
                                  className="cursor-pointer"
                                  src={EYE}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                          <FormikErrorMessage
                            formik={ChangePasswordFormik}
                            name="newpassword"
                            render={(error) => (
                              <span className="text-[13px] error mt-1 text-rose-500">
                                {error}
                              </span>
                            )}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label>Confirm Password</label>
                        <div>
                          <div className="px-[16px] py-[12px] border-2 rounded-xl mt-[4px] w-full border-[#D8DBDD] relative">
                            <input
                              className="w-full outline-none border-none"
                              name="repeatpassword"
                              type={eyePassword3 ? "text" : "password"}
                              placeholder="Confirm Password"
                              onChange={ChangePasswordFormik.handleChange}
                              onBlur={ChangePasswordFormik.handleBlur}
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
                                <img
                                  className="cursor-pointer"
                                  src={EYE}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                          <FormikErrorMessage
                            formik={ChangePasswordFormik}
                            name="repeatpassword"
                            render={(error) => (
                              <span className="text-[13px] error mt-1 text-rose-500">
                                {error}
                              </span>
                            )}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        onClick={handleNextModal}
                        className="font-medium text-base leading-[150%] mt-[24px] text-[#E7E7E7] bg-Maincolor py-[13px] px-[28px] rounded-lg float-right"
                      >
                        Change Password
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </>
        </>
      )}
    </>
  );
};

export default EditPassword;
