import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRcodeGenerator from "./QRcodeGenerator";
import logo from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo2.svg";
import menu1 from "../assets/images/menu-icon1.svg";
import menu2 from "../assets/images/menu-icon2.svg";
import menu3 from "../assets/images/menu-icon3.svg";
import menu4 from "../assets/images/menu-icon4.svg";
import QR from "../assets/icons/scan.svg";
import QR2 from "../assets/images/qr-code-icon.svg";
import QRImg from "../assets/images/qr-image.png";
import AERO from "../assets/icons/aero.svg";
import AEROTURN from "../assets/icons/Vector_turn.svg";

const Navbar = () => {
  const [openQRcode, setOpenQRcode] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleQRcodeModal = () => {
    setOpenQRcode(!openQRcode);
  };

  const [expanded, setExpanded] = useState(false);

  const toggleNavbarWidth = () => {
    setExpanded(!expanded);
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      {openQRcode && <QRcodeGenerator handleQRcodeModal={handleQRcodeModal} />}
      <div
        className={`  relative h-[100%] bg-Primarycolor px-4 pt-6 pb-5 rounded-14px flex flex-col items-center justify-between transition-all duration-300 ${
          expanded ? " w-[90px] " : " w-[240px]"
        }`}
      >
        <div
          onClick={toggleNavbarWidth}
          className={`cursor-pointer absolute  top-[12%] p-1.5 bg-[#3D4D53] rounded-full z-5 transition-all duration-300 ${
            expanded ? "-right-[13%]" : "-right-[7%] bg-white"
          }`}
        >
          <div className="">
            {expanded ? (
              <div className="relative">
                <div className={"nav_close"}>
                  <img
                    className={
                      " py-1 px-1.5 border-2 rounded-full border-white"
                    }
                    src={AERO}
                    alt="nav aero"
                  />
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className={"nav_open"}>
                  <img
                    className={
                      " py-1 px-1.5 border-2 rounded-full border-slate-950"
                    }
                    src={AEROTURN}
                    alt="aero turn"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-100px w-full">
          <div
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            {expanded ? (
              <img
                className="transition-all duration-300 w-[58px] cursor-pointer"
                src={logo}
                alt=""
              />
            ) : (
              <img
                className="transition-all duration-300 w-[77px] cursor-pointer"
                src={logo2}
                alt=""
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-2.5 w-full">
            <div
              className="w-full hover:bg-background p-[14px]  rounded-md cursor-pointer"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              {expanded ? (
                <div className="flex flex-col items-center justify-center hover:bg-background  rounded-md cursor-pointer">
                  <img
                    src={menu1}
                    alt=""
                    className="icone0123 transition-all duration-300 w-[20px] h-[20px] active:bg-red"
                  />
                  {!isToggled ? (
                    <button
                      onClick={handleToggle}
                      className={`mt-[14px] shadow-sm border-[#354449] flex items-center  w-9 h-5 rounded-full ${
                        isToggled ? "bg-[#2A393F]" : "bg-[#354449]"
                      } p-1 transition-all duration-300`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
                          isToggled
                            ? "transform translate-x-[-1px] bg-[#F7F7F7]"
                            : "transform translate-x-[14px] bg-[#112127] "
                        }`}
                      ></div>
                    </button>
                  ) : null}
                </div>
              ) : (
                <>
                  <div className="flex gap-[10px] active:bg-[#de3]">
                    <img src={menu1} alt="" className="w-[20px] h-[20px]  " />
                    <p className="font-medium text-[16px] leading-[150%] text-white">
                      Dashboard
                    </p>
                  </div>
                  <div className="absolute mt-2px left-[38px] border-l border-[#5F6C70] border-b w-[10px] h-[20px] rounded-bl-[6px]"></div>
                  <div className=" mt-[8px] ml-[22px] flex items-center gap-[32px] ">
                    <p className="transition-all ease-in-out duration-150 text-[14px] font-normal leading-150% text-[#ffffff]">
                      Phantom UI
                    </p>

                    <button
                      onClick={handleToggle}
                      className={`shadow-sm border-[#354449] flex items-center  w-9 h-5 rounded-full ${
                        isToggled ? "dashboard_off_bg" : "dashboard_on_bg"
                      } p-1 transition-all duration-300`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
                          isToggled
                            ? "transform translate-x-[-3px] dashboard_off_badge"
                            : "transform translate-x-[15px] dashboard_on_badge"
                        }`}
                      ></div>
                    </button>
                  </div>
                </>
              )}
            </div>
            <div
              className="w-full hover:bg-background rounded-md cursor-pointer"
              onClick={() => {
                navigate("/camera-page");
              }}
            >
              {expanded ? (
                <div className="flex items-center justify-center hover:bg-background p-[14px] rounded-md cursor-pointer">
                  <img
                    src={menu2}
                    alt=""
                    className="transition-all duration-300 w-[20px] h-[20px] "
                  />
                </div>
              ) : (
                <div className="flex hover:bg-background rounded-md cursor-pointer   gap-[10px] p-[14px]">
                  <img
                    src={menu2}
                    alt=""
                    className="transition-all duration-300 w-[20px] h-[20px]"
                  />
                  <p className="transition-all duration-300 font-medium text-[16px] leading-[150%] text-white">
                    Cameras
                  </p>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                navigate("/users");
              }}
              className="w-full hover:bg-background rounded-md cursor-pointer"
            >
              {expanded ? (
                <div className="flex items-center justify-center hover:bg-background p-[14px] rounded-md cursor-pointer">
                  <img
                    src={menu3}
                    alt=""
                    className="transition-all duration-300 w-[20px] h-[20px]"
                  />
                </div>
              ) : (
                <div className="flex hover:bg-background rounded-md cursor-pointer   gap-[10px] p-[14px]">
                  <img
                    src={menu3}
                    alt=""
                    className="transition-all duration-300 w-[20px] h-[20px]"
                  />
                  <p className="font-medium text-[16px] leading-[150%] text-white">
                    Users
                  </p>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                navigate("/events");
              }}
              className="w-full hover:bg-background rounded-md cursor-pointer"
            >
              {expanded ? (
                <div className="flex items-center justify-center hover:bg-background p-[14px] rounded-md cursor-pointer">
                  <img
                    src={menu4}
                    alt=""
                    className="transition-all duration-300 w-[20px] h-[20px]"
                  />
                </div>
              ) : (
                <div className="flex hover:bg-background rounded-md cursor-pointer   gap-[10px] p-[14px]">
                  <img
                    src={menu4}
                    alt=""
                    className="transition-all duration-300 w-[20px] h-[20px]"
                  />
                  <p className="font-medium text-[16px] leading-[150%] text-white">
                    Events
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            {expanded ? (
              <div
                onClick={handleQRcodeModal}
                className="bg-[#7D3519] p-3 rounded-md cursor-pointer"
              >
                <img src={QR} alt="" />
              </div>
            ) : (
              <>
                <div className="relative flex flex-col items-center mb-[20px]">
                  <img
                    className="absolute top-[-14%] w-[68px] h-[68px]"
                    src={QRImg}
                    alt=""
                  />
                  <div className="qr-code-bg bg-[#F59701]  px-2 py-[40px] w-[200px] rounded-[14px] ">
                    <h1 className="text-[20px] leading-[150%] font-bold text-center mt-2">
                      QR Code
                    </h1>
                    <p className="text-center">
                      To get access Scan QR Code into your mobile CORT
                      application.
                    </p>
                  </div>
                  <button
                    onClick={handleQRcodeModal}
                    className="absolute text-white font-medium bg-[#7D3519] rounded-[10px] flex gap-2 px-[16px] py-[10px] top-[90%]"
                  >
                    <img src={QR2} alt="" />
                    <p>Scan QR Code</p>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
