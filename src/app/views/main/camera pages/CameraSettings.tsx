import React, { useEffect, useRef, useState } from "react";
const img1 = require("../../../assets/images/arrow-down.png");

const CameraSettings = () => {
  const [gridItems, setGridItems] = useState(
    Array.from({
      length: Math.floor(1440 / 13) * Math.floor(900 / 13),
    }).map((_, index) => ({ id: index, isActive: false }))
  );

  const isMouseDown = useRef(false);

  useEffect(() => {
    const onMouseUp = () => {
      isMouseDown.current = false;
    };
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const handleMouseDown = (index) => {
    isMouseDown.current = true;
    setGridItems((prevGridItems) =>
      prevGridItems.map((item) =>
        item.id === index ? { ...item, isActive: true } : item
      )
    );
  };

  const handleMouseEnter = (index) => {
    if (isMouseDown.current) {
      setGridItems((prevGridItems) =>
        prevGridItems.map((item) =>
          item.id === index ? { ...item, isActive: true } : item
        )
      );
    }
  };
  //
  // buttons
  const [selectedGroup1, setSelectedGroup1] = useState([]);
  const [selectedGroup2, setSelectedGroup2] = useState([]);

  const handleClick = (group, name) => {
    if (group === 1) {
      if (selectedGroup1.includes(name)) {
        setSelectedGroup1(selectedGroup1.filter((n) => n !== name));
      } else {
        setSelectedGroup1([...selectedGroup1, name]);
      }
      setSelectedGroup2(selectedGroup2.filter((n) => n !== name));
    } else if (group === 2) {
      if (selectedGroup2.includes(name)) {
        setSelectedGroup2(selectedGroup2.filter((n) => n !== name));
      } else {
        setSelectedGroup2([...selectedGroup2, name]);
      }
      setSelectedGroup1(selectedGroup1.filter((n) => n !== name));
    }
  };

  const Button = ({ group, name }) => {
    const isSelected =
      (group === 1 && selectedGroup1.includes(name)) ||
      (group === 2 && selectedGroup2.includes(name));
    const isDisabled =
      (group === 1 && selectedGroup2.includes(name)) ||
      (group === 2 && selectedGroup1.includes(name));
    const isNotClicked = !isSelected && !isDisabled;
    return (
      <button
        onClick={() => handleClick(group, name)}
        className={`py-[14px] rounded-[8px] text-[14px] leading-[150%] font-medium text-${
          isNotClicked ? "#9EA6A9" : isSelected ? "#7D3519" : "#D8DBDD"
        } border ${
          isSelected
            ? "border-[#7D3519] border-2 text-[#7D3519]"
            : isDisabled
            ? "border-[#D8DBDD] text-[#9EA6A9]"
            : isNotClicked
            ? "border-[#3D4D53] text-[#3D4D53]"
            : "border-[#3D4D53] text-[#3D4D53]"
        }`}
        disabled={false}
      >
        {name}
      </button>
    );
  };

  return (
    <div className="w-full h-[100%] bg-white rounded-10px p-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <p className="text-[#0163E0] underline leading-[150%] font-medium text-[16px]">
            Cameras
          </p>
          <span className="textb">/</span>
          <p className="text-[#0163E0] underline leading-[150%] font-medium text-[16px]">
            Camera Setting
          </p>
        </div>
        <button className="flex justify-between items-center gap-5 px-[20px] py-[10px] bg-[#ECEDEE] border border-[#3D4D53] rounded-lg">
          <p className="leading-[140%] fontb text-[14px] font-medium">
            Parking
          </p>
          <img className="w-[24px] h-[24px]" src={img1} alt="arrow down" />
        </button>
      </div>

      <div className="w-full overflow-auto mt-[24px] rounded-lg">
        <div className="camera-detect-image grid-container grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(16px,1fr))] grid-rows-[repeat(auto-fit,minmax(16px,1fr))] w-[100%] h-[736px] overflow-hidden">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className={`grid-item border border-[#D8DBDD] ${
                item.isActive ? "bg-[#E22828]/50" : ""
              }`}
              onMouseDown={() => handleMouseDown(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
            ></div>
          ))}
        </div>
      </div>

      <div className="">
        <h1 className="mt-[24px] text-[24px] font-semibold leading-[150%] textb">
          Add New Camera
        </h1>
        <h1 className="mt-[24px] text-[16px] font-normal leading-[150%] textb">
          Record
        </h1>
        <form action="">
          <div className="grid grid-cols-4 gap-[20px] mt-[6px]">
            <Button group={1} name="Dog" />
            <Button group={1} name="Cat" />
            <Button group={1} name="Vehicle" />
            <Button group={1} name="Person" />
          </div>
          <h1 className="mt-[24px] text-[16px] font-normal leading-[150%] textb">
            Record & Alarm
          </h1>
          <div className="grid grid-cols-4 gap-[20px] mt-[6px]">
            <Button group={2} name="Dog" />
            <Button group={2} name="Cat" />
            <Button group={2} name="Vehicle" />
            <Button group={2} name="Person" />
          </div>
          <button className="float-right px-[26px] py-[13px] text-white font-normal bg-[#7D3519] rounded-[10px] mt-[24px] ">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CameraSettings;
