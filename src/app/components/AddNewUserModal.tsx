import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "../../store";
import { CamerasListThunk } from "../../thunks/camera.thunk";
const cross = require("../assets/images/close.png");
const profile = require("../assets/images/no-profile.png");
const arrowdown = require("../assets/images/arrow-down.png");

type Props = {
  handleModal: () => void;
};

const AddNewUserModal = (props: Props): JSX.Element => {
  //

  const dispatch = useDispatch();
  const cameras = useSelector((state) => state.camera);
  console.log("camerasss ===> ", cameras);
  useEffect(() => {
    dispatch(CamerasListThunk());
  }, []);

  //
  const [isChecked, setIsChecked] = useState({});

  const handleClick = (index) => {
    setIsChecked({
      ...isChecked,
      [index]: !isChecked[index],
    });
  };

  //

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [editPasswordModal, setEditPasswordModal] = useState<boolean>(true);

  const handleEditUserModal = () => {
    setEditUserModal(!editUserModal);
  };

  const NewUserFormik = useFormik<AddNewUserValidator>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      roles: null,
      cameras: "",
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
            <div className=" w-full layout-outlet bg-[#3D4D53]/50 flex  justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
              <div className="layout-outlet h-[94vh] overflow-y-auto overflow-x-hidden relative  bg-white w-[570px] rounded-xl  ">
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
                <form
                  className=" mt-[60px] px-[32px]"
                  action=""
                  onSubmit={NewUserFormik.handleSubmit}
                >
                  <div className=" w-full ">
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
                      </div>
                      <div className="grid grid-cols-2 gap-[10px] mt-4">
                        {cameras.data.map((items, index) => {
                          return (
                            <>
                              <div
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`flex items-center justify-between border border-[#7D3519] rounded-[10px] px-4 py-3 cursor-pointer ${
                                  isChecked[index]
                                    ? " border border-[#7D3519]"
                                    : "border-[#D8DBDD]"
                                }`}
                              >
                                <p className="text-[#5D636E] text-[14px] ">
                                  {items.name}
                                </p>
                                <label className="checkbox-container relative">
                                  <input
                                    type="checkbox"
                                    checked={!!isChecked[index]} // The double not operator is used to convert undefined to false
                                    onChange={() => handleClick(index)}
                                    name="checkbox"
                                    className="sr-only"
                                  />
                                  <span className="checkmark block rounded-[4px] w-[20px] h-[20px] "></span>
                                </label>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="float-right px-[26px]   py-[13px] text-white font-medium bg-[#7D3519] rounded-[10px] mt-[10px] "
                    >
                      Add New User
                    </button>
                  </div>
                </form>
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
