import React, { useState } from "react";
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
  editUserModal: () => void;
};

const EditUserProfileModal = (props: Props) => {
  const [editUserModal2, setEditUserModal2] = useState<boolean>(false);

  const handleNextModal = () => {
    setEditUserModal2(!editUserModal2);
  };

  return (
    <>
      {!editUserModal2 ? (
        <div className="w-full h-[100%] overflow-hidden  bg-[#3D4D53]/50 flex  justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
          <div className="relative h-[576px] top-[20%] bg-white w-[570px] rounded-xl">
            <div className=" modal-inner-section-header">
              <div className=" event-modal-background-image bg-cover bg-center bg-no-repeat h-[120px] rounded-tl-xl rounded-tr-xl p-[10px]">
                <div
                  onClick={handleNextModal}
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
              <form action="">
                <div className="grid grid-cols-2 gap-[10px] mt-[30px]">
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
                      name="name"
                      id="name"
                      placeholder="Wade"
                    />
                  </div>
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
                      name="name"
                      id="name"
                      placeholder="Waren"
                    />
                  </div>
                </div>
                <div className="mt-[16px]">
                  <label
                    className="text-[#3D4D53] font-medium text-[14px]"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <div className="border rounded-[10px] border-[#D8DBDD] mt-[9px] flex py-[13px] px-[16px] items-center justify-between">
                    <input
                      className="w-full  text-[#3D4D53] font-normal text-sm outline-none border-none "
                      type="email"
                      name="email"
                      id="email"
                      placeholder="wade.warren@example.com"
                    />
                    <button className="text-[#0163E0] text-[14px] font-normal ">
                      Change
                    </button>
                  </div>
                </div>
                <div className="mt-[16px]">
                  <label
                    className="text-[#3D4D53] font-medium text-[14px]"
                    htmlFor=""
                  >
                    Contact Number
                  </label>
                  <div className="border rounded-[10px] border-[#D8DBDD] mt-[9px] flex py-[13px] px-[16px] items-center justify-between">
                    <input
                      className="w-full  text-[#3D4D53] font-normal text-sm outline-none border-none "
                      type="text"
                      name="number"
                      id="number"
                      placeholder="(480) 555-0103"
                    />
                    <button className="text-[#0163E0] text-[14px] font-normal ">
                      Change
                    </button>
                  </div>
                </div>
                <button className="float-right px-[26px] py-[13px] text-white font-medium bg-[#7D3519] rounded-[10px] mt-[24px] ">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditUserProfileModal;
