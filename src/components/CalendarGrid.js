import React, { useState } from "react";
import { format } from "date-fns";
import { DndContext } from "@dnd-kit/core";
import Day from "./Day";

const CalendarGrid = ({ daysInMonth, events, onDayClick, onEventMove }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      const activeDate = active.id.split("-")[0];
      const overDate = over.id.split("-")[0];

      if (activeDate !== overDate) {
        onEventMove(activeDate, overDate, active.id.split("-")[1]);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-7 gap-2 bg-white shadow rounded p-4">
        {daysInMonth.map((day) => {
          const formattedDate = format(day, "yyyy-MM-dd");
          return (
            <Day
              key={formattedDate}
              day={day}
              formattedDate={formattedDate}
              events={events}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              onDayClick={onDayClick}
              onEventMove={onEventMove}
            />
          );
        })}
      </div>
    </DndContext>
  );
};

export default CalendarGrid;
