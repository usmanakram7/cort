import React, { useState } from "react";
import EditUserProfileModal from "./EditUserProfileModal";
import EditPassword from "./EditPassword";
import { useFormik } from "formik";
import { LoginFormValidator } from "../../shared/validators/LoginFormValidator";
import { FormikValidator } from "../../shared/utility";
import { AddNewCameraValidator } from "../../shared/validators/AddNewCameraValidator";
import eye from "../assets/icons/eye-slash.svg";
import closeeye from "../assets/icons/eyeclose.svg";

import { FormikErrorMessage } from "./FormikErrorMessage";
import { AddNewUserValidator } from "../../shared/validators/AddNewUserValidator";
import { API } from "../../api";
const cross = require("../assets/images/close.png");
const profile = require("../assets/images/no-profile.png");
const arrowdown = require("../assets/images/arrow-down.png");

type Props = {
  handleModal: () => void;
};

const AddNewUserModal = (props: Props): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [editPasswordModal, setEditPasswordModal] = useState<boolean>(true);

  const handleEditUserModal = () => {
    setEditUserModal(!editUserModal);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handlesCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log("Checkbox checked:", event.target.checked);
  };

  //
  //
  const [checkboxStates, setCheckboxStates] = useState({
    camera1: false,
    camera2: false,
    camera3: false,
    camera4: false,
  });

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setCheckboxStates({ ...checkboxStates, [name]: checked });
  };

  const renderCheckbox = (name: string, label: string) => (
    <div
      className={`border rounded-[10px] font-medium text-[14px] mt-[9px] flex py-[13px] px-[16px] items-center justify-between  ${
        checkboxStates[name] ? "border-[#7D3519] " : "border-[#D8DBDD]"
      }`}
      onClick={() => handleCheckboxChange(name, !checkboxStates[name])}
    >
      <div className="flex gap-1.5 font-medium text-base">
        <p
          className={`text-[14px] font-medium text-${
            checkboxStates[name] ? "[#7D3519]" : "[#3D4D53]"
          }`}
        >
          {label}
        </p>
      </div>
      {checkboxStates[name] && (
        <>
          <input
            id="custom-checkbox"
            type="checkbox"
            checked={!isChecked}
            onChange={handlesCheckboxChange}
            className="hidden"
          />
          <span
            className={`flex items-center justify-center w-5 h-5 border border-gray-400 rounded-md ${
              !isChecked ? "bg-[#7D3519]" : "bg-white"
            }`}
          >
            {!isChecked && (
              <svg
                className="w-3 h-3 mx-auto my-auto text-white fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            )}
          </span>
        </>
      )}
    </div>
  );

  const NewUserFormik = useFormik<AddNewUserValidator>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      role: null,
      //   selectcamera: "",
    },
    onSubmit: (values) => {
      console.log("Submit Values ==>", values);
      API.users
        .create(values)
        .then((response) => {
          console.log(response, "success!");
          props.handleModal();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    validate: FormikValidator.validator(AddNewUserValidator),
  });

  return (
    <>
      {editPasswordModal ? (
        <>
          {!editUserModal ? (
            <div className="w-full layout-outlet bg-[#3D4D53]/50 flex  justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
              <div className="layout-outlet h-[94vh] overflow-y-auto overflow-x-hidden relative  bg-white w-[570px] rounded-xl pb-4 ">
                <div className=" modal-inner-section-header">
                  <div className=" event-modal-background-image  bg-cover bg-center bg-no-repeat h-[120px] rounded-tl-xl rounded-tr-xl p-[10px]">
                    <div
                      onClick={props.handleModal}
                      className="flex items-center justify-end p-[10px] cursor-pointer group"
                    >
                      <img
                        className="w-[20px] h-[20px] group-hover:scale-110 group-hover:brightness-200"
                        src={cross}
                        alt="cross"
                      />
                    </div>
                  </div>
                  <div>
                    <img
                      className="absolute bg-[#E8EAEA] top-[07%] left-[30px] h-[94px] w-[94px] border-[4px] border-white rounded-[16px]  text-white"
                      src={profile}
                      alt="edit profile"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer absolute text-[#0163E0] left-[130px] top-[128px] leading-[150%] text-[14px] font-normal"
                    >
                      Upload image
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      name="file"
                      id="file-upload"
                    />
                  </div>
                </div>
                <div className=" w-full mt-[60px] px-[32px] ">
                  <form action="" onSubmit={NewUserFormik.handleSubmit}>
                    <div className="grid grid-cols-2 gap-[10px] mt-[30px]">
                      <div>
                        <div>
                          <label
                            className="text-[#3D4D53] font-medium text-[14px]"
                            htmlFor=""
                          >
                            First Name
                          </label>
                          <input
                            className="w-full border rounded-[10px] border-[#D8DBDD] text-[#3D4D53] font-normal text-sm py-[13px] px-[16px] mt-[9px]"
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="First Name"
                            onChange={NewUserFormik.handleChange}
                            onBlur={NewUserFormik.handleBlur}
                          />
                          <FormikErrorMessage
                            formik={NewUserFormik}
                            name="firstname"
                            render={(error) => (
                              <span className="text-[12px] error mt-1 text-rose-500">
                                {error}
                              </span>
                            )}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label
                            className="text-[#3D4D53] font-medium text-[14px]"
                            htmlFor=""
                          >
                            Last Name
                          </label>
                          <input
                            className="w-full border rounded-[10px] border-[#D8DBDD] text-[#3D4D53] font-normal text-sm py-[13px] px-[16px] mt-[9px]"
                            type="text"
                            name="lastname"
                            id="name"
                            placeholder="Last Name"
                            onChange={NewUserFormik.handleChange}
                            onBlur={NewUserFormik.handleBlur}
                          />
                        </div>
                        <FormikErrorMessage
                          formik={NewUserFormik}
                          name="lastname"
                          render={(error) => (
                            <span className="text-[12px] error mt-1 text-rose-500">
                              {error}
                            </span>
                          )}
                        />
                      </div>
                    </div>
                    <div className="mt-[10px]">
                      <div>
                        <label
                          className="text-[#3D4D53] font-medium text-[14px]"
                          htmlFor=""
                        >
                          Email
                        </label>
                        <input
                          className="w-full border mt-[9px] rounded-[10px] border-[#D8DBDD] py-[13px] px-[16px] text-[#3D4D53] font-normal text-sm "
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email here"
                          onChange={NewUserFormik.handleChange}
                          onBlur={NewUserFormik.handleBlur}
                        />
                      </div>
                      <FormikErrorMessage
                        formik={NewUserFormik}
                        name="email"
                        render={(error) => (
                          <span className="text-[12px] error mt-1 text-rose-500">
                            {error}
                          </span>
                        )}
                      />
                    </div>
                    <div className="mt-[10px]">
                      <div>
                        <label
                          className="text-[#3D4D53] font-medium text-[14px]"
                          htmlFor=""
                        >
                          Phone Number
                        </label>

                        <input
                          className="w-full border mt-[9px] rounded-[10px] border-[#D8DBDD] py-[13px] px-[16px] text-[#3D4D53] font-normal text-sm "
                          type="text"
                          name="phonenumber"
                          id="number"
                          placeholder="Phone Number"
                          onChange={NewUserFormik.handleChange}
                          onBlur={NewUserFormik.handleBlur}
                        />
                      </div>
                      <FormikErrorMessage
                        formik={NewUserFormik}
                        name="phonenumber"
                        render={(error) => (
                          <span className="text-[12px] error mt-1 text-rose-500">
                            {error}
                          </span>
                        )}
                      />
                    </div>

                    <div className="mt-[10px]">
                      <div>
                        <label
                          className="text-[#3D4D53] font-medium text-[14px]"
                          htmlFor=""
                        >
                          Password
                        </label>
                        <div className="border rounded-[10px] border-[#D8DBDD] mt-[9px] flex py-[13px] px-[16px] items-center justify-between">
                          <input
                            className="w-full  text-[#3D4D53] font-normal text-sm outline-none border-none "
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="number"
                            placeholder="********"
                            onChange={NewUserFormik.handleChange}
                            onBlur={NewUserFormik.handleBlur}
                          />
                          <div onClick={handleShowPassword}>
                            {showPassword ? (
                              <img
                                className="cursor-pointer"
                                src={eye}
                                alt="open"
                              />
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
                          formik={NewUserFormik}
                          name="password"
                          render={(error) => (
                            <span className="text-[12px] error mt-1 text-rose-500">
                              {error}
                            </span>
                          )}
                        />
                      </div>
                    </div>
                    <hr className="my-[14px]" />
                    <div>
                      <label
                        className="text-[#3D4D53] font-medium text-[14px]"
                        htmlFor="role"
                      >
                        Role
                      </label>
                      <div>
                        <select
                          onChange={NewUserFormik.handleChange}
                          onBlur={NewUserFormik.handleBlur}
                          name="role"
                          id="role"
                          className="add_user w-full outline-none border rounded-[10px] border-[#D8DBDD] mt-[9px] py-[13px] px-[16px] appearance-none"
                        >
                          <option disabled selected={true}>
                            Select Role
                          </option>
                          <option value="Admin">Admin</option>
                          <option value="Staff">Staff</option>
                        </select>
                        <FormikErrorMessage
                          formik={NewUserFormik}
                          name="role"
                          render={(error) => (
                            <span className="text-[12px] error mt-1 text-rose-500">
                              {error}
                            </span>
                          )}
                        />
                      </div>
                    </div>
                    <hr className="my-[14px]" />

                    <div>
                      <div className="flex flex-col">
                        <label className="text-[#3D4D53] " htmlFor="">
                          Cameras
                        </label>
                        {/* <FormikErrorMessage
                          formik={NewUserFormik}
                          name="selectcamera"
                          render={(error) => (
                            <span className="text-[12px] error mt-1 text-rose-500">
                              {error}
                            </span>
                          )}
                        /> */}
                      </div>
                      <div className="grid grid-cols-2 gap-[10px] ">
                        {renderCheckbox("camera1", "Camera 1")}
                        {renderCheckbox("camera2", "Camera 2")}
                        {renderCheckbox("camera3", "Camera 3")}
                        {renderCheckbox("camera4", "Camera 4")}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="float-right px-[26px]  py-[13px] text-white font-medium bg-[#7D3519] rounded-[10px] mt-[10px] "
                    >
                      Add New User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <EditUserProfileModal editUserModal={handleEditUserModal} />
          )}
        </>
      ) : null}
    </>
  );
};

export default AddNewUserModal;
