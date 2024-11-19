import React, { useState, useEffect } from "react";
import { fetchOptions, savePreferences } from "../utils/api";
import UserCalendar from "../components/Calendar/UserCalendar";
import "../styles/User.css";

const UserPanel = () => {
  const [options, setOptions] = useState({});
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    fetchOptions()
      .then((res) => setOptions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSave = () => {
    savePreferences(preferences)
      .then(() => alert("Preferences saved successfully!"))
      .catch((err) => alert("Error saving preferences."));
  };

  return (
    <div className="user-panel">
      <h1>Choose Your Lunch</h1>
      <UserCalendar
        options={options}
        preferences={preferences}
        setPreferences={setPreferences}
      />
      <button onClick={handleSave}>Submit Preferences</button>
    </div>
  );
};

export default UserPanel;
