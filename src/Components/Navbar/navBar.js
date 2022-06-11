import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 0 }}>
      <AppBar
        className="app"
        sx={{
          paddingTop: 0,
          backgroundColor: "rgba(191, 191, 191, 1)",
          width: "50%",
          mx: "auto",
          marginTop: "10vw",
        }}
        position="static"
      >
        <Toolbar sx={{ color: "rgba(1, 1, 1, 1)" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "rgba(1, 1, 1, 1)" }}
          >
            <MenuIcon />
          </IconButton>
          <Button className="toolButts" variant="contained">
            Resume
          </Button>
          <Button className="toolButts" variant="contained">
            Portfolio
          </Button>
          <Button className="toolButts" variant="contained">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
