import React from "react";

const MonthNavigation = ({ currentMonthLabel, goToPreviousMonth, goToNextMonth }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={goToPreviousMonth}
        className="bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-600 mx-3"
      >
        Previous
      </button>
      <h2 className="text-lg font-bold">{currentMonthLabel}</h2>
      <button
        onClick={goToNextMonth}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mx-3"
      >
        Next
      </button>
    </div>
  );
};

export default MonthNavigation;
