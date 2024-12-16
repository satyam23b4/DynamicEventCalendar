import React from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableEvent from "./DraggableEvent";

const Day = ({ day, formattedDate, events, selectedDay, setSelectedDay, onDayClick, onEventMove }) => {
  const { setNodeRef } = useDroppable({ id: formattedDate });

  const handleClick = () => {
    setSelectedDay(formattedDate);
    onDayClick(formattedDate);
  };

  return (
    <div
      ref={setNodeRef}
      className={`text-center p-2 border rounded cursor-pointer ${
        selectedDay === formattedDate ? "bg-blue-200" : "hover:bg-blue-50"
      }`}
      onClick={handleClick}
    >
      <div>{day.getDate()}</div>
      {events[formattedDate] && events[formattedDate].length > 0 && (
        <div className="text-xs text-blue-600">
          {events[formattedDate].length} events
        </div>
      )}
      {events[formattedDate]?.map((event, index) => (
        <DraggableEvent
          key={index}
          event={event}
          index={index}
          date={formattedDate}
          onDragEnd={onEventMove}
        />
      ))}
    </div>
  );
};

export default Day;
