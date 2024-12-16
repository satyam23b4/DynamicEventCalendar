import React, { useEffect, useRef } from 'react';

const EventModal = ({ isOpen, closeModal, date, events, addEvent, deleteEvent }) => {
  const modalRef = useRef(null);

  // Close the modal if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(); // Close the modal if clicked outside
      }
    };

    // Add event listener
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null; // If modal is not open, don't render anything

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
      >
        <h2 className="text-xl font-semibold mb-4">Events on {date}</h2>

        {/* Add event button */}
        <div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={() => addEvent(date, { name: 'New Event', time: '12:00 PM' })}
          >
            Add Event
          </button>
        </div>

        {/* Displaying events for the selected date */}
        <div className="mt-4">
          {events[date]?.map((event, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{event.name} - {event.time}</span> {/* Rendering specific properties */}
              <button
                className="text-red-500"
                onClick={() => deleteEvent(date, index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Close button */}
        <button
          className="w-full bg-gray-300 text-black py-2 rounded mt-4 hover:bg-gray-400"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
