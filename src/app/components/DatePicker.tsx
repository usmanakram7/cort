import React, { useState } from "react";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const changeMonth = (increment) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + increment);
    setCurrentMonth(newMonth);
  };

  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

  const generateCalendar = () => {
    const startDate = new Date(currentMonth);
    startDate.setDate(1);
    const startDay = startDate.getDay();

    const days = daysInMonth(
      currentMonth.getMonth() + 1,
      currentMonth.getFullYear()
    );
    const calendar = [];
    let week = [];

    for (let i = 0; i < startDay; i++) {
      week.push(null);
    }

    for (let day = 1; day <= days; day++) {
      week.push(day);

      if (week.length === 7 || day === days) {
        calendar.push(week);
        week = [];
      }
    }

    return calendar;
  };

  const calendar = generateCalendar();
  const today = new Date();

  const selectDate = (day) => {
    if (!day) return;

    const newDate = new Date(currentMonth);
    newDate.setDate(day);

    const now = new Date();
    now.setHours(0, 0, 0, 0); // Reset hours, minutes, seconds, and milliseconds

    if (newDate > now) {
      return;
    }

    setSelectedDate(newDate);
    console.log(newDate.toISOString().slice(0, 10));
  };

  return (
    <div className="date-picker mt-6">
      <div className="flex items-center justify-between">
        <button
          className="bg-[#F8F8F8] hover:bg-gray-400 text-gray-800 font-bold px-[10px] text-[24px] rounded-[6px]"
          onClick={() => changeMonth(-1)}
        >
          &lt;
        </button>
        <div className=" flex-1 mx-2 border border-[#D8DBDD] w-7"></div>
        <div className=" text-gray-800 font-bold py-2 px-4">
          {currentMonth.toLocaleDateString(undefined, {
            month: "long",
            year: "numeric",
          })}
        </div>
        <div className="flex-1 mx-2 border border-[#D8DBDD] w-7"></div>

        <button
          className={`bg-[#F8F8F8] hover:bg-gray-400 text-gray-800 font-bold px-[10px] text-[24px] rounded-[6px] ${
            new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth() + 1,
              1
            ) > today
              ? "disabled month-btn opacity-[0.5] pointer-events-none"
              : ""
          }`}
          onClick={() => changeMonth(1)}
          disabled={
            new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth() + 1,
              1
            ) > today
          }
        >
          &gt;
        </button>
      </div>

      <table className="table-auto border-collapse w-10/12 m-auto">
        <thead>
          <tr>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
              <th
                key={`day-${i}`}
                className=" py-3 w-[40px] text-[14px] leading-[150%] font-medium"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full">
          {calendar.map((week, i) => (
            <tr key={`week-${i}`}>
              {week.map((day, j) => (
                <td
                  key={`day-${j}`}
                  className={` py-[15px] rounded-full  text-[16px]  text-center cursor-pointer  hover:bg-[#d3d3d3] hover:text-white hover:rounded-full ${
                    day === today.getDate() &&
                    currentMonth.getMonth() === today.getMonth() &&
                    currentMonth.getFullYear() === today.getFullYear()
                      ? "text-white bg-[#BE9A8C]"
                      : ""
                  } ${
                    day === selectedDate.getDate() &&
                    currentMonth.getMonth() === selectedDate.getMonth() &&
                    currentMonth.getFullYear() === selectedDate.getFullYear()
                      ? "bg-[#7D3519] text-white rounded-full "
                      : ""
                  } ${
                    currentMonth.getMonth() === today.getMonth() &&
                    currentMonth.getFullYear() === today.getFullYear() &&
                    day > today.getDate()
                      ? "text-gray-300 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => selectDate(day)}
                >
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatePicker;
