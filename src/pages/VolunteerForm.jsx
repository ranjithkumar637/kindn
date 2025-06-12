import React, { useState } from "react";
import API from "../services/api";

const VolunteerForm = () => {
  const [form, setForm] = useState({ name: "", contact: "", skills: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      await API.post("/volunteer/offer", form);
      setSuccess("Thank you for volunteering!");
      setForm({ name: "", contact: "", skills: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed.");
    }
  };

  return (
    <div className="form-container">
      <h2>Want to Help?</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="contact" placeholder="Contact Info" value={form.contact} onChange={handleChange} required />
        <textarea name="skills" placeholder="Skills / Availability" value={form.skills} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default VolunteerForm; 