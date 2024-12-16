import { useState, useEffect } from "react";

const useEvents = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : {};
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (date, event) => {
    setEvents((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), event],
    }));
  };

  const deleteEvent = (date, eventIndex) => {
    setEvents((prev) => {
      const updatedEvents = [...prev[date]];
      updatedEvents.splice(eventIndex, 1);
      return { ...prev, [date]: updatedEvents };
    });
  };

  const updateEvent = (date, eventIndex, updatedEvent) => {
    setEvents((prev) => {
      const updatedEvents = [...prev[date]];
      updatedEvents[eventIndex] = updatedEvent;
      return { ...prev, [date]: updatedEvents };
    });
  };

  const moveEvent = (fromDate, toDate, eventIndex) => {
    setEvents((prev) => {
      const eventToMove = prev[fromDate][eventIndex];
      const updatedFromDateEvents = [...prev[fromDate]];
      updatedFromDateEvents.splice(eventIndex, 1);
      
      return {
        ...prev,
        [fromDate]: updatedFromDateEvents,
        [toDate]: [...(prev[toDate] || []), eventToMove],
      };
    });
  };

  return { events, addEvent, deleteEvent, updateEvent, moveEvent };
};

export default useEvents;
