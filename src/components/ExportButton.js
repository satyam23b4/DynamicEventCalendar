import React from "react";

const ExportButton = ({ events, currentMonthLabel }) => {
  const exportToJSON = () => {
    const blob = new Blob([JSON.stringify(events, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${currentMonthLabel}.json`;
    link.click();
  };

  const exportToCSV = () => {
    const csvRows = [
      ["Date", "Event Name", "Time", "Description"],
      ...Object.entries(events).flatMap(([date, eventList]) =>
        eventList.map((event) => [
          date,
          event.name,
          event.time,
          event.description || "N/A",
        ])
      ),
    ];

    const csvContent = csvRows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${currentMonthLabel}.csv`;
    link.click();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={exportToJSON}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Export to JSON
      </button>
      <button
        onClick={exportToCSV}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Export to CSV
      </button>
    </div>
  );
};

export default ExportButton;
