import React, { useState } from "react";
import DatePicker from "./DatePicker";
import abc from "../assets/icons/video.svg";
const cross = require("../assets/images/cross.png");
const cameraIcon = require("../assets/icons/video.svg");
const gear = require("../assets/images/options.png");

type Props = {
  handleFilterModal: () => void;
};

const EventFilterModal = (props: Props): JSX.Element => {
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
    camera5: false,
    camera6: false,
    camera7: false,
    camera8: false,
  });

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setCheckboxStates({ ...checkboxStates, [name]: checked });
  };

  const renderCheckbox = (name: string, label: string) => (
    <div
      className={`flex justify-between max-w-full border-Stroke border border-solid rounded-10px px-[16px] py-[13px] cursor-pointer ${
        checkboxStates[name] ? "border-[#7D3519] border " : ""
      }`}
      onClick={() => handleCheckboxChange(name, !checkboxStates[name])}
    >
      <div className="flex gap-1.5 font-medium text-base">
        <img className="w-[24px] h-[24px]" src={abc} alt="" />
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
            className={`flex items-center justify-center w-5 h-5 border border-[#7D3519] rounded-md ${
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

  return (
    <>
      <div className="w-full overflow-auto layout-outlet  bg-[#3D4D53]/50 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
        <div className="overflow-auto layout-outlet relative h-[92vh]  bg-[#fff] w-[520px]  flex px-[30px] py-[20px] flex-col rounded-xl">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-[20px] leading-[150%] font-semibold color-[#3D4D53]">
              By Cameras
            </h1>
            <img
              onClick={props.handleFilterModal}
              className="float-right w-[20px] h-[20px] cursor-pointer"
              src={cross}
              alt=""
            />
          </div>
          <div className="mt-[24px]">
            <div className="grid grid-cols-2  gap-5 w-full">
              {renderCheckbox("camera1", "Main Gate 1")}
              {renderCheckbox("camera2", "Main Gate 2")}
              {renderCheckbox("camera3", "Main Gate 3")}
              {renderCheckbox("camera4", "Main Gate 4")}
              {renderCheckbox("camera5", "Main Gate 5")}
              {renderCheckbox("camera6", "Main Gate 6")}
              {renderCheckbox("camera7", "Main Gate 7")}
              {renderCheckbox("camera8", "Main Gate 8")}
            </div>
          </div>

          <h1 className="text-[20px] leading-[150%] font-semibold color-[#3D4D53] mt-[24px]">
            By Dates
          </h1>
          <div>
            <DatePicker />
          </div>

          <div className="w-full">
            <button className=" mb-[10px]  font-semibold text-base leading-[150%] mt-[24px] text-[#E7E7E7] bg-Maincolor py-[13px] px-[26px] rounded-lg float-right">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventFilterModal;
