import React, { useEffect, useState } from "react";
import AddNewUserModal from "../../components/AddNewUserModal";
import EditCameraUsersModal from "../../components/EditCameraUsersModal";
import userEdit from "../../assets/images/user-edit.svg";
import { useAuthContext } from "../../../shared/contexts";
import { usersListThunk } from "../../../thunks";
import { useDispatch, useSelector } from "../../../store";

const Users = (): JSX.Element => {
  const [addNewUserModal, setAddNewUserModal] = useState(false);
  const handleModal = () => {
    setAddNewUserModal(!addNewUserModal);
  };

  const [editUserModal, seteditUserModal] = useState(false);

  function handleEditModal() {
    seteditUserModal(!editUserModal);
  }

  return (
    <>
      {editUserModal && <EditCameraUsersModal handleModal={handleEditModal} />}
      {addNewUserModal && <AddNewUserModal handleModal={handleModal} />}
      <div className="flex gap-2.5 w-full h-full">
        <div className="flex flex-col gap-5 p-5 w-full  bg-white rounded-10px shadow-header_shadow">
          <div className="flex items-center justify-between ">
            <p className="font-bold text-xl font-poppins text-Primarycolor">
              Users
            </p>
            <button
              onClick={handleModal}
              className="text-sm bg-[#3D4D53]/10 font-medium font-poppins bg-btnclr px-5 py-2.5 text-textclr rounded-lg border border-solid border-Primarycolor"
            >
              Add New User
            </button>
          </div>
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-5  w-full bg-white border border-solid border-Stroke rounded-10px p-5">
              <div className="flex gap-2.5 items-center">
                <p className="bg-Maincolor text-white text-sm font-semibold p-14px rounded-10px">
                  J C
                </p>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium font-poppins">
                    Jane Cooper
                  </p>
                  <p className="text-xs font-medium font-poppins">
                    jane.cooper@example.com
                  </p>
                </div>
              </div>
              <button
                onClick={handleEditModal}
                className="flex items-center justify-center gap-2.5 bg-bgclr border border-solid
                        border-Stroke rounded-10px py-14px hover:bg-[#7D3519] transition-all duration-75 hover:text-white"
              >
                <img className="w-[24px] h-[24px] " src={userEdit} alt="" />
                Edit User
              </button>
            </div>

            <div className="flex flex-col  w-full gap-5 bg-white border border-solid border-Stroke rounded-10px p-5">
              <div className="flex gap-2.5 items-center">
                <p className="bg-blue-600 text-white text-sm font-semibold p-14px rounded-10px">
                  J C
                </p>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium font-poppins">
                    Brooklyn Simmons
                  </p>
                  <p className="text-xs font-medium font-poppins">
                    brooklyn@example.com
                  </p>
                </div>
              </div>
              <button
                onClick={handleEditModal}
                className="flex items-center  justify-center gap-2.5 bg-bgclr border border-solid
                        border-Stroke rounded-10px py-14px  hover:bg-[#7D3519] transition-all duration-75 hover:text-white"
              >
                <img className="w-[24px] h-[24px] " src={userEdit} alt="" />
                Edit User
              </button>
            </div>
            <div className="flex flex-col  w-full gap-5 bg-white border border-solid border-Stroke rounded-10px p-5">
              <div className="flex gap-2.5 items-center">
                <p className="bg-green-600 text-white text-sm font-semibold p-14px rounded-10px">
                  J C
                </p>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium font-poppins">
                    Guy Hawkins
                  </p>
                  <p className="text-xs font-medium font-poppins">
                    guy.hawkins@example.com
                  </p>
                </div>
              </div>
              <button
                onClick={handleEditModal}
                className="flex items-center  justify-center gap-2.5 bg-bgclr border border-solid
                        border-Stroke rounded-10px py-14px  hover:bg-[#7D3519] transition-all duration-75 hover:text-white"
              >
                <img className="w-[24px] h-[24px]  " src={userEdit} alt="" />
                Edit User
              </button>
            </div>
            <div className="flex flex-col  w-full gap-5 bg-white border border-solid border-Stroke rounded-10px p-5">
              <div className="flex gap-2.5 items-center">
                <p className="bg-orange-600 text-white text-sm font-semibold p-14px rounded-10px">
                  J C
                </p>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium font-poppins">
                    Albert Flores
                  </p>
                  <p className="text-xs font-medium font-poppins">
                    albert.flores@example.com
                  </p>
                </div>
              </div>
              <button
                onClick={handleEditModal}
                className="flex items-center  justify-center gap-2.5 bg-bgclr border border-solid
                        border-Stroke rounded-10px py-14px  hover:bg-[#7D3519] transition-all duration-75 hover:text-white"
              >
                <img className="w-[24px] h-[24px] " src={userEdit} alt="" />
                Edit User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
