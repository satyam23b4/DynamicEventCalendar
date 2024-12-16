import { useState } from "react";
import { startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, format } from "date-fns";

const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const currentMonthLabel = format(currentMonth, "MMMM yyyy");

  return { daysInMonth, currentMonthLabel, goToNextMonth, goToPreviousMonth };
};

export default useCalendar;
