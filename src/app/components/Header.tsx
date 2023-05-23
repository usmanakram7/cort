import React, { useState, useEffect, useRef } from "react";
import EditUserModal from "./EditUserModal";
import ToggleButton from "./ToggleButton";
import useOnClickOutside from "./ClickOutSideClose";
import EditPassword from "./EditPassword";
import notification from "../../app/assets/icons/notification.svg";
import arrowDown from "../../app/assets/icons/Arrow-Down.svg";
import { useAuthContext } from "../../shared/contexts";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [editUserModal, setEditUserModal] = useState(false);

  const handleEditUserModal = () => {
    setEditUserModal(!editUserModal);
    setAdminDropdownOpen(false);
    console.log("opened profile modal");
  };

  const [editUserPasswordModal, setEditUserPasswordModal] = useState(false);

  const handleEditPasswordrModal = () => {
    setEditUserPasswordModal(!editUserPasswordModal);
    setAdminDropdownOpen(false);
    console.log("opened password modal");
  };
  const [currentTime, setCurrentTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value, isHour = false) => {
    if (isHour) {
      value = value > 12 ? value - 12 : value;
    }
    return value.toString().padStart(2, "0");
  };

  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const adminDropdownRef = useRef(null);
  useOnClickOutside(adminDropdownRef, () =>
    handleAdminDropDown(!adminDropdownOpen)
  );

  const handleAdminDropDown = (isOpen) => {
    setAdminDropdownOpen(isOpen);
  };

  // TOGGLE

  const [isAlarmToggled, setIsAlarmToggled] = useState(false);
  const [isSystemToggled, setIsSystemToggled] = useState(false);

  const handleAlarmToggle = () => {
    setIsAlarmToggled(!isAlarmToggled);
  };
  const handleSystemToggle = () => {
    setIsSystemToggled(!isSystemToggled);
  };

  const context = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    context.updateUser(null, null);
    navigate("/login");
  };

  return (
    <>
      {editUserModal && (
        <EditUserModal handleEditUserModal={handleEditUserModal} />
      )}
      {editUserPasswordModal && (
        <EditPassword
          handleModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          modal1={false}
        />
      )}

      <div
        className={`w-full shadow-header_shadow flex items-center justify-between gap-5 h-fit py-2.5 px-5 rounded-10px ${
          isAlarmToggled ? "bg-[#FEE1E1]" : "bg-white"
        } `}
      >
        <div className="flex items-end ">
          <p className="font-poppins font-medium text-3xl not-italic leading[150%] text-Primarycolor">
            {formatTime(currentTime.hours, true)}:
            {formatTime(currentTime.minutes)}
          </p>
          <span className="mb-[2.5px] font-poppins font-medium text-sm not-italic leading[150%] text-Primarycolor">
            {""}: {formatTime(currentTime.seconds)}
            {currentTime.hours >= 12 ? "PM" : "AM"}
          </span>
        </div>
        <div className="flex items-center justify-end gap-5">
          <div
            onClick={handleSystemToggle}
            className={`flex items-center gap-2  px-[26px] py-[14px] rounded-lg cursor-pointer ${
              isSystemToggled ? "bg-[#349962]" : "bg-[#F8F8F8]"
            }`}
          >
            <p
              className={`font-poppins font-semibold text-sm not-italic leading[150%] ${
                isSystemToggled ? "text-[#FFFFFF]" : "text-[#3D4D53]"
              }`}
            >
              System
            </p>
            <button
              className={`flex items-center   w-9 h-5 rounded-full ${
                isSystemToggled ? "system_on_toggle_bg" : "system_off_toggle_bg"
              } p-1 transition-all duration-300`}
            >
              <div
                className={`w-4 h-4 bg-[#6E8993] rounded-[10px] shadow-md transition-transform duration-300 ${
                  isSystemToggled
                    ? "transform translate-x-[14px] system_on_toggle_badge"
                    : "transform translate-x-[-2px] system_off_toggle_badge"
                }`}
              ></div>
            </button>
            <img src="Imgs/Group 1321315887.svg" alt="" />
          </div>
          <div
            onClick={handleAlarmToggle}
            className={`flex items-center gap-2 px-[26px] py-[14px] rounded-lg cursor-pointer ${
              isAlarmToggled ? "bg-[#FFECEC]" : "bg-bgclr"
            }`}
          >
            <p
              className={`font-poppins font-semibold text-sm  not-italic leading[150%] ${
                isAlarmToggled ? "text-[#E22828]" : "text-Primarycolor"
              }`}
            >
              Alarm
            </p>
            <button
              className={`flex items-center   w-9 h-5 rounded-full ${
                isAlarmToggled ? "alarm_on_toggle_bg" : "alarm_off_toggle_bg"
              } p-1 transition-all duration-300`}
            >
              <div
                className={`w-4 h-4 bg-[#6E8993] rounded-[10px] shadow-md transition-transform duration-300 ${
                  isAlarmToggled
                    ? "transform translate-x-[14px] alarm_on_toggle_badge"
                    : "transform translate-x-[-2px] alarm_off_toggle_badge"
                }`}
              ></div>
            </button>
          </div>
          <div className="bg-bgclr p-13px border border-solid border-Stroke rounded-10px">
            <img src={notification} alt="notification" />
          </div>
          <div
            // onClick={handleEditUserModal}
            className="flex gap-2.5 items-center cursor-pointer"
          >
            <p className="bg-Maincolor text-white text-sm font-semibold py-14px px-2.5 rounded-10px">
              WW
            </p>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-semibold font-poppins">Wade Waren</p>
              <div
                className="relative flex gap-1 items-center"
                onClick={() => handleAdminDropDown(!adminDropdownOpen)}
              >
                <p className="text-sm font-normal font-poppins">Admin</p>
                <div className="mt-0.5">
                  <img src={arrowDown} />
                </div>
                {adminDropdownOpen && (
                  <div
                    ref={adminDropdownRef}
                    className="absolute top-[18px] right-[0px] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  >
                    <div
                      className=" border border-r-white border-b-white rounded-sm absolute top-[3px] left-[83%] transform -translate-x-1/2 rotate-45  shadow-slate-950 w-4 h-4 bg-white -z-10 "
                      style={{ marginTop: "-0.65rem" }}
                    ></div>
                    <div className="py-1">
                      {/* Add any menu items you need */}

                      <button
                        onClick={handleEditUserModal}
                        className="block w-full px-4 py-2 text-sm text-left text-[#3D4D53] hover:bg-gray-100 focus:outline-none"
                      >
                        Profile
                      </button>
                      <button
                        onClick={handleEditPasswordrModal}
                        className="block w-full px-4 py-2 text-sm text-left text-[#3D4D53] hover:bg-gray-100 focus:outline-none"
                      >
                        Change Password
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block text-[#E22828] w-full px-4 py-2 text-sm text-left  hover:bg-gray-100 focus:outline-none"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
