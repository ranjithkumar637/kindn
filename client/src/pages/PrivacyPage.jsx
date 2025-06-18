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

const PrivacyPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          At KindNeighbour, we are committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Information We Collect</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We collect information you provide directly to us, such as when you create an account, request help, 
              or volunteer to help others. This may include:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">Name, email address, and contact information</Typography>
              <Typography component="li">Location and address information</Typography>
              <Typography component="li">Profile information and preferences</Typography>
              <Typography component="li">Help requests and volunteer activities</Typography>
              <Typography component="li">Communications with other users</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">How We Use Your Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We use the information we collect to:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">Provide and maintain our services</Typography>
              <Typography component="li">Connect help seekers with volunteers</Typography>
              <Typography component="li">Send you important updates and notifications</Typography>
              <Typography component="li">Improve our platform and user experience</Typography>
              <Typography component="li">Ensure the safety and security of our community</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Information Sharing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">To facilitate connections between help seekers and volunteers</Typography>
              <Typography component="li">To comply with legal obligations</Typography>
              <Typography component="li">To protect the safety and security of our users</Typography>
              <Typography component="li">With your explicit consent</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Data Security</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. These measures include:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">Encryption of sensitive data</Typography>
              <Typography component="li">Regular security assessments</Typography>
              <Typography component="li">Access controls and authentication</Typography>
              <Typography component="li">Secure data storage practices</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Your Rights</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              You have the right to:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">Access and review your personal information</Typography>
              <Typography component="li">Update or correct your information</Typography>
              <Typography component="li">Request deletion of your account</Typography>
              <Typography component="li">Opt out of certain communications</Typography>
              <Typography component="li">File a complaint about our data practices</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Contact Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </Typography>
            <Typography variant="body1">
              Email: privacy@kindneighbour.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Community St, City, State 12345
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  );
};

export default PrivacyPage; 