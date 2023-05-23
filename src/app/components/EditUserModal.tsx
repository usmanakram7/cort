import React, { useState } from "react";
import EditUserProfileModal from "./EditUserProfileModal";
import EditPassword from "./EditPassword";
const cross = require("../assets/images/close.png");
const profile = require("../assets/images/editprofilepic.png");
const message = require("../assets/images/sms-modal.png");
const phone = require("../assets/images/phone-modal.png");
const camera = require("../assets/images/camera-modal.png");
const group = require("../assets/images/group-modal.png");
const editProfile = require("../assets/images/user-edit.png");
const lockModal = require("../assets/images/lock-modal.png");
const logout = require("../assets/images/logout-modal.png");

type Props = {
  handleEditUserModal: () => void;
};

const EditUserModal = (props: Props) => {
  const [editUserModal, setEditUserModal] = useState(false);
  const [editPasswordModal, setEditPasswordModal] = useState(true);

  const handleEditUserModal = () => {
    setEditUserModal(!editUserModal);
  };

  const ChangePasswordModal = () => {
    setEditPasswordModal(!editPasswordModal);
  };

  return (
    <>
      {editPasswordModal ? (
        <>
          {!editUserModal ? (
            <div className="w-full h-[100%] overflow-hidden  bg-[#3D4D53]/50 flex  justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
              <div className="relative h-[609px] top-[20%] bg-white w-[570px] rounded-xl">
                <div className=" innersection">
                  <div className=" event-modal-background-image bg-cover bg-center bg-no-repeat h-[120px] rounded-tl-xl rounded-tr-xl p-[10px]">
                    <div
                      onClick={props.handleEditUserModal}
                      className="flex items-center justify-end p-[10px] cursor-pointer group"
                    >
                      <img
                        className="w-[20px] h-[20px] group-hover:scale-110 group-hover:brightness-200"
                        src={cross}
                        alt="cross"
                      />
                    </div>
                  </div>
                  <img
                    className="absolute top-[12%] left-[30px] h-[94px] w-[94px] border-[4px] border-white rounded-[16px]  text-white"
                    src={profile}
                    alt="edit profile"
                  />
                </div>
                <div className="absolute w-full h-full top-[166px] px-[32px]">
                  <h1 className="text-[#3D4D53] text-[20px] font-semibold mt-[4px]">
                    Wade Waren
                  </h1>
                  <p className="text-[#3D4D53] text-[16px] font-normal mt-[2px]">
                    Admin
                  </p>

                  <div className=" flex items-center justify-between mt-[24px]">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[24px] h-[24px]"
                        src={message}
                        alt="message"
                      />
                      <p className="text-[16px] font-medium text-[#3D4D53]">
                        Email
                      </p>
                    </div>
                    <p className="text-[16px] font-medium text-[#3D4D53]">
                      wade.waren@mail.com
                    </p>
                  </div>
                  <div className=" flex items-center justify-between mt-[16px] mb-[24px]">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[24px] h-[24px]"
                        src={phone}
                        alt="phone"
                      />
                      <p className="text-[16px] font-medium text-[#3D4D53]">
                        Phone
                      </p>
                    </div>
                    <p className="text-[16px] font-medium text-[#3D4D53]">
                      (480) 555-0103
                    </p>
                  </div>
                  <hr />
                  <div className=" flex items-center justify-between mt-[24px]">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[24px] h-[24px]"
                        src={camera}
                        alt="camera"
                      />
                      <p className="text-[16px] font-medium text-[#3D4D53]">
                        Total Cameras
                      </p>
                    </div>
                    <p className="text-[16px] font-medium text-[#3D4D53]">16</p>
                  </div>
                  <div className=" flex items-center justify-between mt-[16px] mb-[24px]">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[24px] h-[24px]"
                        src={group}
                        alt="group"
                      />
                      <p className="text-[16px] font-medium text-[#3D4D53]">
                        Total Users
                      </p>
                    </div>
                    <p className="text-[16px] font-medium text-[#3D4D53]">07</p>
                  </div>
                  <hr />
                  <div className=" flex items-center mt-[24px] cursor-pointer gap-2">
                    <img
                      className="w-[24px] h-[24px]"
                      src={editProfile}
                      alt="edit profile"
                    />
                    <p
                      onClick={handleEditUserModal}
                      className="text-[16px] font-medium text-[#3D4D53]"
                    >
                      Edit Profile
                    </p>
                  </div>
                  <div className=" flex items-center mt-[16px] gap-2">
                    <img
                      className="w-[24px] h-[24px]"
                      src={lockModal}
                      alt="lock"
                    />
                    <p
                      onClick={ChangePasswordModal}
                      className="text-[16px] font-medium text-[#3D4D53] cursor-pointer"
                    >
                      Change Password
                    </p>
                  </div>
                  <div className=" flex items-center mt-[16px] mb-[24px] cursor-pointer gap-2">
                    <img
                      className="w-[24px] h-[24px]"
                      src={logout}
                      alt="logout"
                    />
                    <p className="text-[16px] font-medium text-[#E22828]">
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <EditUserProfileModal editUserModal={handleEditUserModal} />
          )}
        </>
      ) : (
        <EditPassword
          handleModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          modal1={false}
        />
      )}
    </>
  );
};

export default EditUserModal;
