import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-16 h-8 rounded-full ${
        isToggled ? "bg-green-400" : "bg-gray-300"
      } p-1 transition-all duration-300`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
          isToggled ? "transform translate-x-8" : ""
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
