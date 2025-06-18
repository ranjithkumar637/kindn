import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button, Paper, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Paper elevation={3} sx={{ p: 6, mb: 6, textAlign: 'center', background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)', color: 'white' }}>
          <Typography variant="h2" gutterBottom>
            Welcome to KindNeighbour
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Connecting communities through acts of kindness. Get help or offer help in your neighborhood.
          </Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} to="/register" sx={{ mr: 2 }}>
            Get Started
          </Button>
          <Button variant="outlined" color="inherit" size="large" component={Link} to="/login">
            Login
          </Button>
        </Paper>

        {/* Features Section */}
        <Typography variant="h4" align="center" gutterBottom>
          How It Works
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6, justifyContent: 'center' }}>
          <Card elevation={2} sx={{ flex: 1, minWidth: 250 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>Request Help</Typography>
              <Typography variant="body1">
                Need groceries, medicine, or a friendly chat? Post a request and a neighbor will help you out.
              </Typography>
            </CardContent>
          </Card>
          <Card elevation={2} sx={{ flex: 1, minWidth: 250 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>Become a Volunteer</Typography>
              <Typography variant="body1">
                Sign up as a volunteer and make a difference in your community by helping those in need.
              </Typography>
            </CardContent>
          </Card>
          <Card elevation={2} sx={{ flex: 1, minWidth: 250 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>Safe & Secure</Typography>
              <Typography variant="body1">
                Your privacy and safety are our top priorities. All interactions are secure and confidential.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Call to Action Section */}
        <Paper elevation={2} sx={{ p: 4, textAlign: 'center', background: '#f5f5f5' }}>
          <Typography variant="h5" gutterBottom>
            Ready to make a difference?
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/register">
            Join KindNeighbour Now
          </Button>
        </Paper>
      </Container>
    );
  }

  if (user.role === "admin") {
    return (
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
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
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
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
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
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