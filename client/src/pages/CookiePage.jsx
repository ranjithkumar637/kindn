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

const CookiePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Cookie Policy
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          This Cookie Policy explains how KindNeighbour uses cookies and similar technologies to recognize you 
          when you visit our website. It explains what these technologies are and why we use them, as well as 
          your rights to control our use of them.
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">What are cookies?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, 
              as well as to provide reporting information.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">How do we use cookies?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We use cookies for several reasons. Some cookies are required for technical reasons in order for 
              our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
              Other cookies also enable us to track and target the interests of our users to enhance the 
              experience on our website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Types of cookies we use</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We use the following types of cookies:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li">
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. 
                They enable basic functions like page navigation and access to secure areas of the website.
              </Typography>
              <Typography component="li">
                <strong>Authentication Cookies:</strong> These cookies help us remember your login status and 
                keep you signed in as you navigate through our website.
              </Typography>
              <Typography component="li">
                <strong>Preference Cookies:</strong> These cookies allow our website to remember information 
                that changes the way the website behaves or looks, such as your preferred language or region.
              </Typography>
              <Typography component="li">
                <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with 
                our website by collecting and reporting information anonymously.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Third-party cookies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              In addition to our own cookies, we may also use various third-party cookies to report usage 
              statistics of our website, deliver advertisements on and through our website, and so on.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">How to control cookies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
              rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager 
              allows you to select which categories of cookies you accept or reject.
            </Typography>
            <Typography variant="body1" paragraph>
              Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Browser settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              You can also control cookies through your browser settings. However, if you choose to reject 
              cookies, you may still use our website though your access to some functionality and areas of 
              our website may be restricted.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Updates to this policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes 
              to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore 
              re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">Contact us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default CookiePage; 