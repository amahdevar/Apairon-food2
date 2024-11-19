import React from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import { isPersianDate } from "../../utils/calendarUtils";

const AdminCalendar = ({ options, setOptions }) => {
  const handleDateChange = (date) => {
    if (!isPersianDate(date)) return;
    const key = `${date.year}-${date.month}-${date.day}`;
    if (!options[key]) options[key] = ["", ""];
    setOptions({ ...options });
  };

  return (
    <div className="calendar-container">
      <Calendar
        value={null}
        onChange={handleDateChange}
        shouldHighlightWeekends
        locale="fa" // Persian calendar
      />
      {/* Render editable options here */}
    </div>
  );
};

export default AdminCalendar;
