import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'space-between' }}>
          {/* Company Info */}
          <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
            <Typography variant="h6" gutterBottom>
              KindNeighbour
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Connecting communities through acts of kindness. We believe in the power of 
              neighbors helping neighbors to create stronger, more supportive communities.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" size="small">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" size="small">
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                component={Link}
                to="/help"
                color="inherit"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                Help Center
              </MuiLink>
              <MuiLink
                component={Link}
                to="/contact"
                color="inherit"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                Contact Us
              </MuiLink>
              <MuiLink
                component={Link}
                to="/about"
                color="inherit"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                About Us
              </MuiLink>
              <MuiLink
                component={Link}
                to="/volunteer"
                color="inherit"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                Become a Volunteer
              </MuiLink>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email fontSize="small" />
                <Typography variant="body2">
                  support@kindneighbour.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone fontSize="small" />
                <Typography variant="body2">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">
                  123 Community St, City, State 12345
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} KindNeighbour. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <MuiLink
              component={Link}
              to="/privacy"
              color="inherit"
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              to="/terms"
              color="inherit"
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              Terms of Service
            </MuiLink>
            <MuiLink
              component={Link}
              to="/cookies"
              color="inherit"
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              Cookie Policy
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 