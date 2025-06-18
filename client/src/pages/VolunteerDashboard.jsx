import React, { useEffect, useState } from "react";
import API from "../services/api";

const VolunteerDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRequests = () => {
    setLoading(true);
    setError("");
    API.get("/requests/available")
      .then(res => setRequests(res.data))
      .catch(() => setError("Failed to load requests."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const claimRequest = async (id) => {
    setError("");
    try {
      await API.post(`/requests/${id}/claim`);
      fetchRequests();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to claim request.");
    }
  };

  return (
    <div>
      <h2>Volunteer Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? <p>Loading...</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Title</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Description</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Status</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 && (
              <tr><td colSpan={4} style={{ textAlign: 'center', padding: 16 }}>No available requests.</td></tr>
            )}
            {requests.map(r => (
              <tr key={r._id}>
                <td style={{ border: '1px solid #ccc', padding: 8 }}>{r.title}</td>
                <td style={{ border: '1px solid #ccc', padding: 8 }}>{r.description}</td>
                <td style={{ border: '1px solid #ccc', padding: 8 }}>{r.claimedBy ? "Claimed" : "Unclaimed"}</td>
                <td style={{ border: '1px solid #ccc', padding: 8 }}>
                  {r.claimedBy ? (
                    <span>Claimed</span>
                  ) : (
                    <button onClick={() => claimRequest(r._id)}>Claim</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VolunteerDashboard; 