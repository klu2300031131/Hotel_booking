import React, { useEffect, useState } from "react";
import "./Admin.css"; // Optional for styling

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    setUsers(allUsers);
  }, []);

  return (
    <div className="admin-container">
      <h2>👑 Admin Panel - Registered Users</h2>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>👤 Name</th>
              <th>📧 Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
