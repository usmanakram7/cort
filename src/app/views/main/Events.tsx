import React, { useState } from "react";
import EventFilterModal from "../../components/EventFilterModal";
import Star from "../../components/EventStar";
import share from "../../assets/icons/share.svg";
import trash from "../../assets/icons/trash.svg";
import filter from "../../assets/icons/filter.svg";
import star2 from "../../assets/icons/select_star.svg";
import peticon from "../../assets/icons/cat.svg";
import caricon from "../../assets/icons/car.svg";
import usericon2 from "../../assets/icons/unknown.svg";
import usericon from "../../assets/icons/user.svg";

const star = require("../../assets/images/star.png");

const Events = () => {
  const [showfilterModal, setShowFilterModal] = useState<boolean>(false);

  const [dangerEvent, setDangerEvent] = useState<boolean>(false);

  const handleDangerEvent = () => {
    setDangerEvent(!dangerEvent);
  };

  const handleFilterModal = () => {
    setShowFilterModal(!showfilterModal);
  };

  const CustomTd = ({
    icon,
    detection,
    location,
    time,
    date,
    rowBg,
    detectBg,
    alertColor,
  }) => {
    return (
      <tr className={rowBg}>
        <td
          className={`px-[20px] py-[7px] flex items-center  gap-4 text-base font-medium ${alertColor}`}
        >
          <div className={`rounded-lg p-1.5 ${detectBg}`}>
            <img className="w-[24px] h-[24px]" src={icon} alt="" />
          </div>
          {detection}
        </td>
        <td className="px-[20px] py-[7px] text-base font-normal text-[#828C8F]">
          {location}
        </td>
        <td className=" px-[20px] py-[7px] text-base font-medium text-[#3D4D53] ">
          {time}
        </td>
        <td className=" px-[20px] py-[7px] text-base font-medium text-[#3D4D53] ">
          {date}
        </td>
        <td className="px-[20px] py-[7px] flex gap-2.5 justify-end mr-14 text-[#3D4D53] ">
          <div>
            <img
              className="bg-Stroke rounded-lg cursor-pointer p-2.5 text-[#3D4D53]"
              src={share}
              alt=""
            />
          </div>
          <div>
            <Star />
          </div>
          <div>
            <img
              className="bg-[#FCE9E9] cursor-pointer rounded-lg p-2.5"
              src={trash}
              alt=""
            />
          </div>
        </td>
      </tr>
    );
  };
  return (
    <>
      {showfilterModal && (
        <EventFilterModal handleFilterModal={handleFilterModal} />
      )}

      <div className="flex flex-col h-89vh bg-white rounded-10px w-full">
        <div className="flex items-center justify-between p-5 ">
          <p className="font-bold text-xl  text-Primarycolor">Events</p>
          <div className="flex gap-5">
            <button
              className="flex gap-2  text-base font-medium  bg-[#ECEDEE] px-6 py-3 rounded-lg
                        border   border-[#3D4D53] text-[#3D4D53]"
            >
              Favourite <img src={star2} alt="" />
            </button>
            <button
              onClick={handleFilterModal}
              className="flex gap-2  text-base font-medium  bg-[#ECEDEE] px-6 py-3  rounded-lg
                   border   border-[#3D4D53] text-[#3D4D53]"
            >
              Search by filter{" "}
              <img
                className="h-[24px] w-[24px]"
                src={filter}
                alt="filter image"
              />
            </button>
          </div>
        </div>
        <table className="table-fixed w-full text-justify">
          <tr className="border-b">
            <th className="text-left text-[#3D4D53] px-[20px] py-[13px]">
              Detection
            </th>
            <th className="text-left text-[#3D4D53] px-[20px] py-[13px]">
              Location
            </th>
            <th className="text-left text-[#3D4D53] px-[20px] py-[13px]">
              Time
            </th>
            <th className="text-left text-[#3D4D53] px-[20px] py-[13px]">
              Date
            </th>
            <th className="text-center text-[#3D4D53] px-[20px] py-[13px]">
              Action
            </th>
          </tr>
          <CustomTd
            icon={usericon}
            detection="Person Detect"
            location="Balcony"
            time="11:50 AM"
            date="10 Dec, 2023"
            rowBg="bg-[#ffffff]"
            detectBg="bg-[#ffffff]"
            alertColor="text-[#3D4D53]"
          />
          <CustomTd
            icon={usericon2}
            detection="Unknown Person Detect"
            location="Main Door"
            time="11:50 AM"
            date="10 Dec, 2023"
            rowBg="bg-[#F8FAFC]"
            detectBg="bg-[#FCE9E9]"
            alertColor="text-[#E22828]"
          />
          <CustomTd
            icon={usericon}
            detection="Vehicle Detect"
            location="Office"
            time="11:50 AM"
            date="10 Dec, 2023"
            rowBg="bg-[#ffffff]"
            detectBg="bg-[#ffffff]"
            alertColor="text-[#3D4D53]"
          />
        </table>
      </div>
    </>
  );
};

export default Events;
