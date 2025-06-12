import React, { useEffect, useState } from "react";
import API from "../services/api";

const RequesterDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.get("/help/my").then(res => setRequests(res.data)).finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>My Help Requests</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {requests.map(r => (
            <li key={r._id}>{r.name}: {r.details} {r.claimedBy ? <b>(Claimed)</b> : <b>(Unclaimed)</b>}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequesterDashboard; 