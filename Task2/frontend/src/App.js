import "./Styles/Global.css";
import TripPage from "./Pages/TripPage.js";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import "./Styles/Header.css";
import TripModal from './Components/TripModal.js'
export default function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <header
          className="header"
          style={{ backgroundColor: toggleDarkMode ? "black" : "white" }}
        >
          <div className="headercontainer">
            <h1 className="navheading">NESSCO</h1>
            <ul className="navlinks">
              <a className="navlink" href="/">
                <Typography
                  variant="h6"
                  sx={{ marginTop: 3 }}
                  color="text.primary"
                >
                  About
                </Typography>
              </a>
              <a className="navlink" href="/">
                <Typography
                  variant="h6"
                  sx={{ marginTop: 3 }}
                  color="text.primary"
                >
                  Services
                </Typography>
              </a>
              <a className="navlink" href="/">
                <Typography
                  variant="h6"
                  sx={{ marginTop: 3 }}
                  color="text.primary"
                >
                  Contact
                </Typography>
              </a>
              <a className="navlink" href="/">
                <Typography
                  variant="h6"
                  sx={{ marginTop: 3 }}
                  color="text.primary"
                >
                  Sign Up
                </Typography>
              </a>
              <a className="navlink" href="/">
                <Typography
                  variant="h6"
                  sx={{ marginTop: 3 }}
                  color="text.primary"
                >
                  Sign In
                </Typography>
              </a>
            </ul>
            <h1 className="themeswitcher" onClick={toggleDarkTheme}>
              {toggleDarkMode ? <WbSunnyIcon /> : <BedtimeIcon />}
            </h1>
          </div>
        </header>
        <TripPage darkmode={toggleDarkMode} /> */}
        <TripModal darkmode={toggleDarkMode}/>
      </div>
    </ThemeProvider>
  );
}
