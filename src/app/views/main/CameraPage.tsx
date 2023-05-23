import React, { useEffect, useRef, useState } from "react";
import HandleCameraConfirmDelete from "../../components/HandleCameraConfirmDelete";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../../components/ClickOutSideClose";
import cameraIcon from "../../assets/icons/video.svg";
import { useDispatch, useSelector } from "../../../store";
import { camerasListThunk } from "../../../thunks/camera.thunk";

const gear = require("../../assets/images/options.png");

const CameraPage = () => {
  const dispatch = useDispatch();
  const cameras = useSelector((state) => state.camera);
  useEffect(() => {
    dispatch(camerasListThunk());
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [confirmCameraDeleteModal, setCameraConfirmDeleteModal] =
    useState<boolean>(false);

  function handleNotConfirmDelete() {
    setCameraConfirmDeleteModal(!confirmCameraDeleteModal);
  }

  function handleConfirmDelete() {
    setCameraConfirmDeleteModal(!confirmCameraDeleteModal);
  }

  const navigate = useNavigate();

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  // const handleDropDownMenu = (id: number, shouldOpen: boolean) => {
  //   setOpenDropdownId(shouldOpen ? id : null);
  // };

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => handleDropDownMenu(null, false));

  const handleDropDownMenu = (id: number, shouldOpen: boolean) => {
    if (shouldOpen && openDropdownId !== id) {
      setOpenDropdownId(id);
    } else if (!shouldOpen || openDropdownId === id) {
      setOpenDropdownId(null);
    }
  };

  return (
    <>
      <div className="w-full h-[100%] flex flex-1">
        <div className="w-full gap-2.5  ">
          <div className="p-5 bg-white rounded-10px h-full">
            <div className="flex items-center justify-between w-full h-fit">
              <p className="font-semibold text-2xl text-Primarycolor">
                Cameras
              </p>
              <button
                onClick={() => {
                  navigate("/add-new-camera");
                }}
                className="font-medium text-sm px-5 py-2.5 bg-[#3D4D53]/10 rounded-lg border-black border border-solid"
              >
                Add New Camera
              </button>
            </div>
            <div className="grid grid-cols-3 mt-2.5 gap-5 w-full">
              {cameras.data.map((cameraItems) => (
                <div
                  key={cameraItems.id}
                  className="relative flex justify-between max-w-full border-Stroke border border-solid  rounded-10px px-4 py-[18px] py-18px cursor-pointer"
                >
                  <div className="flex gap-1.5 font-medium text-base">
                    <img
                      className="w-[24px] h-[24px]"
                      src={cameraIcon}
                      alt=""
                    />
                  </div>
                  {cameraItems.name}
                  <div>
                    <img
                      onClick={() => setIsDropdownOpen(true)}
                      className="w-[24px] h-[24px]"
                      src={gear}
                      alt=""
                    />
                    {isDropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className=" absolute top-[48px] right-0 mt-2 w-48 bg-white border  rounded-md shadow-lg z-10 "
                      >
                        <div
                          className="border border-r-white border-b-white rounded-sm absolute top-0 left-[86%] transform -translate-x-1/2 rotate-45  shadow-slate-950 w-4 h-4 bg-white -z-[10] "
                          style={{ marginTop: "-0.65rem" }}
                        ></div>
                        <div className="py-1">
                          <button
                            onClick={() => {
                              navigate("/camera-settings");
                            }}
                            className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none"
                          >
                            Settings
                          </button>
                          <button
                            onClick={() => {
                              setIsDropdownOpen(false);
                              handleConfirmDelete();
                            }}
                            className="block w-full px-4 py-2 text-sm text-left text-[#E22828] hover:bg-gray-100 focus:outline-none"
                          >
                            Delete Camera
                          </button>
                        </div>
                        {confirmCameraDeleteModal && (
                          <HandleCameraConfirmDelete
                            id={cameraItems.id}
                            handleNotConfirmDelete={handleNotConfirmDelete}
                            handleConfirmDelete={handleConfirmDelete}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
                //
                //
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CameraPage;
