# Dynamic Event Calendar

A modern, responsive, and interactive event calendar built with React.js. This web app allows users to manage events, navigate through months, and seamlessly drag-and-drop events across dates. It's designed to provide a simple and intuitive user experience, with advanced features like modal-based event management, export functionality, and month navigation.

## Features

- **Interactive Calendar**: 
  - Navigate between months using the **Next** and **Previous** buttons.
  - The current month is displayed at the top of the calendar.
  - Click any day to add new events or view existing ones.

- **Event Management**:
  - **Add Event**: Easily add events to any day in the calendar.
  - **Delete Event**: Remove events from the selected day.
  - **Drag-and-Drop**: Move events across different days using drag-and-drop functionality.

- **Event Modal**:
  - When a date is clicked, a modal opens to display all events for that day.
  - Events can be added, deleted, and managed directly from the modal.
  - The modal closes when clicking outside, ensuring a seamless user experience.

- **Month Navigation**:
  - Navigate to the **next** or **previous** month with intuitive buttons.
  - The calendar dynamically updates to show the selected month’s events.

- **Event Export**:
  - An **Export Button** is available to download the events for the current month in a structured format, making it easy to save or share the event details.

## Technical Details

- **Frontend**:
  - Built with **React.js** for a responsive, component-based architecture.
  - **Tailwind CSS** used for utility-first styling, ensuring a clean, modern design.
  - **React Hooks**: Utilized `useState`, `useEffect`, and `useRef` for efficient state management and side-effect handling.
  - **Drag-and-Drop**: Implemented using the `@dnd-kit/core` library, enabling smooth and intuitive drag-and-drop functionality.
  
- **Event Handling**:
  - Events are stored in a centralized state using React's `useState` hook, making them easily accessible across the app.
  - The events can be added, deleted, and moved between days using functions provided via hooks.

- **Modal Management**:
  - The modal for event management is implemented using React's conditional rendering and `useRef` for detecting outside clicks to close the modal.

- **Responsive Design**:
  - The application is fully responsive and optimized for both desktop and mobile devices.
  - The layout and design automatically adjust to different screen sizes for a seamless user experience.

## Getting Started

To get this project up and running locally on your machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/dynamic-event-calendar.git
