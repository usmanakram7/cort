import React, { useState } from "react";
const QR = require("../../app/assets/images/QR-code-scan-image.png");
const cross = require("../../app/assets/images/cross.png");
const arrow = require("../../app/assets/images/arrow-right.png");

type Props = {
  handleQRcodeModal: () => void;
};

const QRcodeGenerator = (props: Props): JSX.Element => {
  return (
    <div className="w-full h-screen bg-[#3D4D53]/50 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
      <div className="fixed bg-[#fff]  flex items-center w-[780px] flex-col rounded-xl transition-all ease-in duration-1000 ">
        <div
          onClick={props.handleQRcodeModal}
          className="float-right w-full p-4"
        >
          <img
            className="float-right w-[20px] h-[20px] cursor-pointer"
            src={cross}
            alt=""
          />
        </div>
        <div className="flex items-center gap-[30px] pl-[40px] pr-[40px] pb-[40px]">
          <img className="w-[300px] h-[300px]" src={QR} alt="QR" />
          <div>
            <h1 className="text-[#3D4D53] leading-[150%] text-[24px] font-bold">
              Scan to Connect with CORT
            </h1>
            <div className="flex gap-[6px] items-start  mt-[16px]">
              <img src={arrow} className="p-[2.67px]" alt="" />
              <p>Open the CORT app and select "Scan QR Code"</p>
            </div>
            <div className="flex gap-[6px] items-start ">
              <img src={arrow} className="p-[2.67px]" alt="" />
              <p>Point your camera at the QR code on this screen</p>
            </div>
            <div className="flex gap-[6px] items-start ">
              <img src={arrow} className="p-[2.67px]" alt="" />
              <p>
                Wait for the app to recognise the code and connect to your
                camera stream
              </p>
            </div>
            <div className="flex gap-[6px] items-start ">
              <img src={arrow} className="p-[2.67px]" alt="" />
              <p>
                Stay connected to your home or business, no matter where you
                are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRcodeGenerator;
