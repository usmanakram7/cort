import React, { useRef } from "react";

type OptInputsProps = {
  values: number[];
  onChange: (values: number[]) => void;
};

const OptInputs: React.FC<OptInputsProps> = ({ values, onChange }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = event.target.value;
    const newValue = inputValue.slice(0, 1);
    if (!/^\d+$/.test(newValue)) {
      return;
    }
    const newValues = [...values];
    newValues[index] = Number(newValue);
    onChange(newValues);
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      if (event.currentTarget.value === "") {
        const newValues = [...values];
        newValues[index - 1] = 0;
        onChange(newValues);
        if (inputRefs.current[index - 1]) {
          inputRefs.current[index - 1].focus();
        }
      } else {
        const newValues = [...values];
        newValues[index] = 0;
        onChange(newValues);
      }
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 w-full px-[30px] mt-[24px]">
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          placeholder="-"
          value={value === 0 ? "" : value}
          onChange={(event) => handleChange(event, index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          className="border border-[#D8DBDD] px-8 py-4 text-center rounded-xl text-4xl text-black"
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default OptInputs;
