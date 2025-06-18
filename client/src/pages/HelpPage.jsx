import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import {
  ExpandMore,
  Help,
  Email,
  Phone,
  Chat,
  Book,
  Security,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Help Center
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Find answers to common questions and get the support you need
      </Typography>

      {/* Quick Help Cards */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 4 }}>
        <Card sx={{ flex: 1, minWidth: 250, textAlign: 'center' }}>
          <CardContent>
            <Book color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6" gutterBottom>Getting Started</Typography>
            <Typography variant="body2" color="text.secondary">Learn how to create an account and use our platform</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: 250, textAlign: 'center' }}>
          <CardContent>
            <Help color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6" gutterBottom>FAQ</Typography>
            <Typography variant="body2" color="text.secondary">Find answers to frequently asked questions</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: 250, textAlign: 'center' }}>
          <CardContent>
            <Security color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6" gutterBottom>Safety & Security</Typography>
            <Typography variant="body2" color="text.secondary">Learn about our safety measures and guidelines</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: 250, textAlign: 'center' }}>
          <CardContent>
            <Chat color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6" gutterBottom>Contact Support</Typography>
            <Typography variant="body2" color="text.secondary">Get in touch with our support team</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* FAQ Section */}
        <Box sx={{ flex: 2 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Frequently Asked Questions
            </Typography>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How do I create an account?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Click the "Register" button in the top navigation bar. Fill in your information, 
                  choose your role (Help Seeker or Volunteer), and create your account. You'll receive 
                  a confirmation email to verify your account.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How do I request help?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  After logging in as a Help Seeker, click on "Request Help" from your dashboard. 
                  Fill out the form with details about what you need help with, your location, and 
                  any specific requirements. Volunteers in your area will be notified and can offer to help.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How do I volunteer to help?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Register as a Volunteer and browse available help requests in your area. When you 
                  find a request you'd like to help with, click "Offer Help" and provide details about 
                  how you can assist. The help seeker will be notified and can accept your offer.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Is my personal information safe?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Yes, we take your privacy and security seriously. We use encryption to protect your 
                  data and only share necessary information between help seekers and volunteers. 
                  Read our Privacy Policy for more details about how we protect your information.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">What if I have a problem with another user?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  If you encounter any issues with another user, please contact our support team immediately. 
                  We have community guidelines and safety measures in place. You can also block users 
                  and report inappropriate behavior through our platform.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Can I change my role after registration?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Currently, you can only have one role per account. If you want to switch roles, 
                  you'll need to create a new account with the desired role. We're working on adding 
                  the ability to have multiple roles in the future.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Box>

        {/* Contact Support */}
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 4, height: 'fit-content' }}>
            <Typography variant="h5" gutterBottom>
              Need More Help?
            </Typography>
            <Typography variant="body1" paragraph>
              Can't find what you're looking for? Our support team is here to help.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                startIcon={<Email />}
                fullWidth
              >
                Contact Us
              </Button>
              <Button
                variant="outlined"
                startIcon={<Phone />}
                fullWidth
              >
                Call Support
              </Button>
              <Button
                variant="outlined"
                startIcon={<Chat />}
                fullWidth
              >
                Live Chat
              </Button>
            </Box>

            <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
              <Typography variant="subtitle2" gutterBottom>
                Support Hours:
              </Typography>
              <Typography variant="body2">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default HelpPage; 