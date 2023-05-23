import React, { useState } from "react";
import EditUserProfileModal from "./EditUserProfileModal";
import EditPassword from "./EditPassword";
import ConfirmDelete from "./ConfirmDelete";
import eye from "../assets/icons/eye-slash.svg";
import closeeye from "../assets/icons/eyeclose.svg";
import { useFormik } from "formik";
import { FormikValidator } from "../../shared/utility";
import { EditUserValidator } from "../../shared/validators";
import { FormikErrorMessage } from "./FormikErrorMessage";

const cross = require("../assets/images/close.png");
const profile = require("../assets/images/editprofilepic.png");
const arrowdown = require("../assets/images/arrow-down.png");
const menu = require("../assets/images/options.png");

type Props = {
  handleModal: () => void;
};

const EditCameraUsersModal = (props: Props): JSX.Element => {
  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [editPasswordModal, setEditPasswordModal] = useState<boolean>(true);

  const handleEditUserModal = () => {
    setEditUserModal(!editUserModal);
  };

  const [confirmDeleteModal, setConfirmDeleteModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  function handleNotConfirmDelete() {
    setConfirmDeleteModal(!confirmDeleteModal);
    setEditUserModal(!editUserModal);
    setEditPasswordModal(!editPasswordModal);
  }

  function handleConfirmDelete() {
    setConfirmDeleteModal(!confirmDeleteModal);
  }
  function handleOpenDeleteModal() {
    setOpenDeleteModal(!openDeleteModal);
  }

  const [isChecked, setIsChecked] = useState(false);

  const handlesCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log("Checkbox checked:", event.target.checked);
  };

  const [checkboxStates, setCheckboxStates] = useState({
    camera1: false,
    camera2: false,
    camera3: false,
    camera4: false,
  });

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setCheckboxStates({ ...checkboxStates, [name]: checked });
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const renderCheckbox = (name: string, label: string) => (
    <div
      className={`border rounded-[10px] border-[#D8DBDD] font-medium text-[14px] mt-[9px] flex py-[13px] px-[16px] items-center justify-between  ${
        checkboxStates[name] ? "border-[#7D3519] border-2 " : ""
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

  const EditUserFormik = useFormik<EditUserValidator>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      role: "",
    },
    onSubmit: (values) => {
      console.log("Submit Values ==>", values);
    },

    validate: FormikValidator.validator(EditUserValidator),
  });

  return (
    <>
      {confirmDeleteModal && (
        <ConfirmDelete
          handleConfirmDelete={handleConfirmDelete}
          handleNotConfirmDelete={handleNotConfirmDelete}
        />
      )}
      {editPasswordModal ? (
        <>
          {!editUserModal ? (
            <div className="w-full layout-outlet bg-[#3D4D53]/50 flex  justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
              <div className="layout-outlet h-[94vh] overflow-y-auto overflow-x-hidden relative  bg-white w-[570px] rounded-xl pb-4 ">
                <div className=" modal-inner-section-header">
                  <div className=" event-modal-background-image bg-cover bg-center bg-no-repeat h-[120px] rounded-tl-xl rounded-tr-xl p-[10px]">
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
                <div className="relative z-20 p-2 w-full">
                  <img
                    onClick={handleOpenDeleteModal}
                    src={menu}
                    alt="menu"
                    className="z-20 p-4  cursor-pointer  float-right"
                  />
                  {openDeleteModal && (
                    <div className="absolute top-[50px] right-[3px] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <div
                        className=" border border-r-white border-b-white rounded-sm absolute top-[3px] left-[83%] transform -translate-x-1/2 rotate-45  shadow-slate-950 w-4 h-4 bg-white -z-10 "
                        style={{ marginTop: "-0.65rem" }}
                      ></div>
                      <div className="py-1">
                        <button
                          onClick={handleNotConfirmDelete}
                          className="block text-[#E22828] w-full px-4 py-2 text-sm text-left  hover:bg-gray-100 focus:outline-none"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className=" w-full mt-[40px] px-[32px]">
                  <form action="">
                    <div className="grid grid-cols-2 gap-[10px] ">
                      <div>
                        <label
                          className="text-[#3D4D53] font-medium text-[14px]"
                          htmlFor="firstname"
                        >
                          First Name
                        </label>
                        <input
                          className="w-full border rounded-[10px] border-[#D8DBDD] text-[#3D4D53] font-normal text-sm py-[13px] px-[16px] mt-[9px]"
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="John"
                          onChange={EditUserFormik.handleChange}
                          onBlur={EditUserFormik.handleBlur}
                        />

                        <FormikErrorMessage
                          formik={EditUserFormik}
                          name="firstname"
                          render={(error) => (
                            <span className="text-[12px] error mt-1 text-rose-500">
                              {error}
                            </span>
                          )}
                        />
                      </div>
                      <div>
                        <label
                          className="text-[#3D4D53] font-medium text-[14px]"
                          htmlFor="lastname"
                        >
                          Last Name
                        </label>
                        <input
                          className="w-full border rounded-[10px] border-[#D8DBDD] text-[#3D4D53] font-normal text-sm py-[13px] px-[16px] mt-[9px]"
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Jane"
                          onChange={EditUserFormik.handleChange}
                          onBlur={EditUserFormik.handleBlur}
                        />
                        <FormikErrorMessage
                          formik={EditUserFormik}
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
                      <label
                        className="text-[#3D4D53] font-medium text-[14px]"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full border mt-[9px] rounded-[10px] border-[#D8DBDD] py-[13px] px-[16px] text-[#3D4D53] font-normal text-sm "
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                        onChange={EditUserFormik.handleChange}
                        onBlur={EditUserFormik.handleBlur}
                      />
                      <FormikErrorMessage
                        formik={EditUserFormik}
                        name="email"
                        render={(error) => (
                          <span className="text-[12px] error mt-1 text-rose-500">
                            {error}
                          </span>
                        )}
                      />
                    </div>
                    <div className="mt-[10px]">
                      <label
                        className="text-[#3D4D53] font-medium text-[14px]"
                        htmlFor="phonenumber"
                      >
                        Phone Number
                      </label>

                      <input
                        className="w-full border mt-[9px] rounded-[10px] border-[#D8DBDD] py-[13px] px-[16px] text-[#3D4D53] font-normal text-sm "
                        type="text"
                        name="phonenumber"
                        id="number"
                        placeholder="+665 545 454"
                        onChange={EditUserFormik.handleChange}
                        onBlur={EditUserFormik.handleBlur}
                      />
                      <FormikErrorMessage
                        formik={EditUserFormik}
                        name="phonenumber"
                        render={(error) => (
                          <span className="text-[12px] error mt-1 text-rose-500">
                            {error}
                          </span>
                        )}
                      />
                    </div>

                    <div className="mt-[10px]">
                      <label
                        className="text-[#3D4D53] font-medium text-[14px]"
                        htmlFor="password"
                      >
                        Password
                      </label>

                      <div className="border rounded-[10px] border-[#D8DBDD] mt-[9px] flex py-[13px] px-[16px] items-center justify-between">
                        <input
                          className="w-full  text-[#3D4D53] font-normal text-sm outline-none border-none "
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          placeholder="********"
                          onChange={EditUserFormik.handleChange}
                          onBlur={EditUserFormik.handleBlur}
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
                        formik={EditUserFormik}
                        name="password"
                        render={(error) => (
                          <span className="text-[12px] error mt-1 text-rose-500">
                            {error}
                          </span>
                        )}
                      />
                    </div>
                    <hr className="my-[14px]" />
                    <label
                      className="text-[#3D4D53] font-medium text-[14px]"
                      htmlFor=""
                    >
                      Role
                    </label>
                    <div>
                      <select className="edit_user w-full outline-none border rounded-[10px] border-[#D8DBDD] mt-[9px] py-[13px] px-[16px] appearance-none">
                        <option disabled selected>
                          Select Role
                        </option>
                        <option value="Admin">Admin</option>
                        <option value="Staff">Staff</option>
                      </select>
                    </div>
                    <hr className="my-[14px]" />

                    <label className="text-[#3D4D53] " htmlFor="">
                      Cameras
                    </label>
                    <div className="grid grid-cols-2 gap-[10px]">
                      {renderCheckbox("camera1", "Camera 1")}
                      {renderCheckbox("camera2", "Camera 2")}
                      {renderCheckbox("camera3", "Camera 3")}
                      {renderCheckbox("camera4", "Camera 4")}
                    </div>
                    <button
                      type="submit"
                      className=" ml-[16px] float-right px-[26px] py-[13px] text-white font-medium bg-[#7D3519] rounded-[10px] mt-[10px] "
                    >
                      Save Changes
                    </button>
                    <button className="float-right px-[26px] py-[13px] textb font-medium bg-[#E8EAEA] rounded-[10px] mt-[10px] ">
                      Discard
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

export default EditCameraUsersModal;
