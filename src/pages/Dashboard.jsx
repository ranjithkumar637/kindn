import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button, Paper } from "@mui/material";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to KindNeighbour
          </Typography>
          <Typography align="center">Please login or register to continue.</Typography>
        </Paper>
      </Container>
    );
  }

  if (user.role === "admin") {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome, Admin!
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" component={Link} to="/admin" sx={{ mt: 2 }}>
              Go to Admin Dashboard
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }

  if (user.role === "volunteer") {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome, Volunteer!
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" component={Link} to="/dashboard" sx={{ mt: 2, mr: 2 }}>
              Go to Volunteer Dashboard
            </Button>
            <Button variant="outlined" component={Link} to="/get-help" sx={{ mt: 2 }}>
              View Help Requests
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }

  if (user.role === "requester") {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome, Help Seeker!
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" component={Link} to="/get-help" sx={{ mt: 2, mr: 2 }}>
              Request Help
            </Button>
            <Button variant="outlined" component={Link} to="/my-requests" sx={{ mt: 2 }}>
              View My Requests
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }

  return null;
};

export default Dashboard; 