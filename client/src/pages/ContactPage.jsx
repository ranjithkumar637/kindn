import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Alert,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
} from "@mui/icons-material";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Contact Form */}
        <Box sx={{ flex: 2, mb: { xs: 4, md: 0 } }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Send us a Message
            </Typography>
            {submitted && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Thank you for your message! We'll get back to you soon.
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: { xs: 2, sm: 0 } }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Box>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                sx={{ mt: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
                sx={{ mt: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* Contact Information */}
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 4, height: 'fit-content' }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Email color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2">Email</Typography>
                  <Typography variant="body2">support@kindneighbour.com</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Phone color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2">Phone</Typography>
                  <Typography variant="body2">+1 (555) 123-4567</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationOn color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2">Address</Typography>
                  <Typography variant="body2">
                    123 Community St<br />
                    City, State 12345
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTime color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2">Business Hours</Typography>
                  <Typography variant="body2">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage; 