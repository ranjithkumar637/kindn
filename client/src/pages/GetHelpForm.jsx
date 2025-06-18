import React, { useState } from "react";
import API from "../services/api";

const GetHelpForm = () => {
  const [form, setForm] = useState({ name: "", contact: "", details: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      await API.post("/help/request", form);
      setSuccess("Your help request has been submitted!");
      setForm({ name: "", contact: "", details: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed.");
    }
  };

  return (
    <div className="form-container">
      <h2>Request Help</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="contact" placeholder="Contact Info" value={form.contact} onChange={handleChange} required />
        <textarea name="details" placeholder="How can we help you?" value={form.details} onChange={handleChange} required />
        <button type="submit">Submit Request</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default GetHelpForm; 
