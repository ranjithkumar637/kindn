import React, { useEffect, useState } from "react";
import API from "../services/api";

const VolunteerDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRequests = () => {
    setLoading(true);
    API.get("/help/requests").then(res => setRequests(res.data)).finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const claimRequest = async (id) => {
    await API.post(`/help/claim/${id}`);
    fetchRequests();
  };

  return (
    <div>
      <h2>Volunteer Dashboard</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {requests.map(r => (
            <li key={r._id}>
              {r.name}: {r.details} {r.claimedBy ? <b>(Claimed)</b> : <button onClick={() => claimRequest(r._id)}>Claim</button>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VolunteerDashboard; 