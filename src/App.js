import useCalendar from './hooks/useCalendar'; 
import useEvents from './hooks/useEvents'; 
import MonthNavigation from './components/MonthNavigation'; 
import CalendarGrid from './components/CalendarGrid'; 
import EventModal from './components/EventModal'; 
import ExportButton from './components/ExportButton';
import React, { useState } from 'react';

const App = () => {
  const { daysInMonth, currentMonthLabel, goToNextMonth, goToPreviousMonth } = useCalendar();
  const { events, addEvent, deleteEvent, moveEvent } = useEvents();

  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleEventMove = (fromDate, toDate, eventIndex) => {
    moveEvent(fromDate, toDate, eventIndex);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50">
      <div className="flex flex-col items-center">
        <MonthNavigation
          currentMonthLabel={currentMonthLabel}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />
        <div className="mt-6 w-full max-w-3xl rounded-lg shadow-lg bg-white p-6">
          <CalendarGrid
            daysInMonth={daysInMonth}
            events={events}
            onDayClick={handleDayClick}
            onEventMove={handleEventMove}
          />
        </div>
        <ExportButton events={events} currentMonthLabel={currentMonthLabel} />
      </div>
      <EventModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        date={selectedDate}
        events={events}
        addEvent={addEvent}
        deleteEvent={deleteEvent}
      />
    </div>
  );
};

export default App;
