import React, { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get("/auth/users").then(res => setUsers(res.data)).catch(() => setUsers([]));
    API.get("/help/requests").then(res => setRequests(res.data)).catch(() => setRequests([]));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>All Users</h3>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.name} ({u.email}) - {u.role}</li>
        ))}
      </ul>
      <h3>All Help Requests</h3>
      <ul>
        {requests.map(r => (
          <li key={r._id}>{r.name}: {r.details} {r.claimedBy ? `(Claimed)` : `(Unclaimed)`}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard; 