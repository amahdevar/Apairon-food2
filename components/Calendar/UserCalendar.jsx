import React from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import { isPersianDate } from "../../utils/calendarUtils";

const UserCalendar = ({ options, preferences, setPreferences }) => {
  const handleSelect = (date) => {
    if (!isPersianDate(date)) return;
    const key = `${date.year}-${date.month}-${date.day}`;
    const currentOption = preferences[key] || "";
    const newOption = currentOption === options[key][0] ? options[key][1] : options[key][0];
    setPreferences({ ...preferences, [key]: newOption });
  };

  return (
    <div className="calendar-container">
      <Calendar
        value={null}
        onChange={handleSelect}
        shouldHighlightWeekends
        locale="fa" // Persian calendar
      />
      {/* Render selected preferences below */}
    </div>
  );
};

export default UserCalendar;
