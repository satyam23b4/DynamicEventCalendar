import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableEvent = ({ event, index, date, onDragEnd }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `${date}-${index}`,
  });

  const handleDragEnd = () => {
    onDragEnd(date, index);
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`p-2 mb-2 cursor-pointer bg-blue-200 rounded ${
        isDragging ? "opacity-50" : "hover:bg-blue-300"
      }`}
      onDragEnd={handleDragEnd}
    >
      {event.name} ({event.time})
    </div>
  );
};

export default DraggableEvent;
