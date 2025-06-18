import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const TermsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          Welcome to KindNeighbour. By accessing and using our platform, you agree to be bound by these Terms of Service. 
          Please read them carefully before using our services.
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Acceptance of Terms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              By creating an account or using our services, you acknowledge that you have read, understood, and agree to 
              be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">User Accounts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              To use certain features of our platform, you must create an account. You agree to:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">Provide accurate and complete information</Typography>
              <Typography component="li">Maintain the security of your account credentials</Typography>
              <Typography component="li">Notify us immediately of any unauthorized use</Typography>
              <Typography component="li">Accept responsibility for all activities under your account</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">User Conduct</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              You agree to use our platform in a manner that is lawful, respectful, and appropriate. You must not:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">Violate any applicable laws or regulations</Typography>
              <Typography component="li">Harass, abuse, or harm other users</Typography>
              <Typography component="li">Post false or misleading information</Typography>
              <Typography component="li">Attempt to gain unauthorized access to our systems</Typography>
              <Typography component="li">Use our platform for commercial purposes without permission</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Help Requests and Volunteering</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Our platform facilitates connections between help seekers and volunteers. By using these features, you understand:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">We do not guarantee the availability of volunteers</Typography>
              <Typography component="li">Volunteers are not our employees or agents</Typography>
              <Typography component="li">You are responsible for your own safety and well-being</Typography>
              <Typography component="li">We are not liable for the actions of other users</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Privacy and Data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Your privacy is important to us. Our collection and use of your personal information is governed by our 
              Privacy Policy, which is incorporated into these Terms of Service by reference.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Intellectual Property</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Our platform and its content are protected by intellectual property laws. You may not:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">Copy, modify, or distribute our content without permission</Typography>
              <Typography component="li">Reverse engineer our software</Typography>
              <Typography component="li">Use our trademarks without authorization</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Limitation of Liability</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              To the maximum extent permitted by law, KindNeighbour shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages arising from your use of our platform.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Termination</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We may terminate or suspend your account at any time for violations of these terms or for any other reason. 
              You may also terminate your account at any time by contacting us.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Changes to Terms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes 
              via email or through our platform. Continued use of our services after changes constitutes acceptance of the new terms.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Contact Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              If you have any questions about these Terms of Service, please contact us at:
            </Typography>
            <Typography variant="body1">
              Email: legal@kindneighbour.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Community St, City, State 12345
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  );
};

export default TermsPage; 