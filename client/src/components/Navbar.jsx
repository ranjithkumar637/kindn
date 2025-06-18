import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          KindNeighbour
        </Typography>
        {!user && (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        )}
        {user && user.role === "admin" && (
          <>
            <Button color="inherit" component={Link} to="/admin">Admin Dashboard</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        )}
        {user && user.role === "volunteer" && (
          <>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/get-help">Get Help</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        )}
        {user && user.role === "requester" && (
          <>
            <Button color="inherit" component={Link} to="/get-help">Get Help</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 