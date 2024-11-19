import React, { useState, useEffect } from "react";
import { fetchOptions, saveOptions, exportChoices, manageUsers } from "../utils/api";
import AdminCalendar from "../components/Calendar/AdminCalendar";

const AdminPanel = () => {
  const [options, setOptions] = useState({});
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    fetchOptions()
      .then((res) => setOptions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSave = () => {
    saveOptions(options)
      .then(() => alert("Options saved successfully!"))
      .catch((err) => alert("Error saving options."));
  };

  const handleAddUser = () => {
    manageUsers("create", { username: newUser })
      .then(() => alert("User added successfully!"))
      .catch((err) => alert("Error adding user."));
  };

  const handleDeleteUser = (username) => {
    manageUsers("delete", { username })
      .then(() => alert("User deleted successfully!"))
      .catch((err) => alert("Error deleting user."));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <AdminCalendar options={options} setOptions={setOptions} />
      <button onClick={handleSave}>Save Options</button>
      <button onClick={exportChoices}>Export User Choices</button>
      <div className="user-management">
        <h2>Manage Users</h2>
        <input
          type="text"
          placeholder="Enter new username"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
        {/* Assume there's a UI list of users here */}
      </div>
    </div>
  );
};

export default AdminPanel;
