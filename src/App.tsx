import { createTheme, Theme } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import Accomodations from "./pages/Accomodations";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import Registry from "./pages/Registry";
import Schedule from "./pages/Schedule";
import SecretDinner from "./pages/SecretDinner";
import CssBaseline from '@mui/material/CssBaseline';

export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzAWSBYx4GsXNm8E-qfgyUjmuZ_moWFoqID5HuX7-IpLddxkU3CGutIJj9iTLZTGNkOAA/exec";

export const theme = createTheme({
  palette: {
    background: {
      default: "#fbc7bd",
      paper: "#fbc7bd",
    },
    primary: { main: "#ff2103" },
    action: { disabled: "#FF675F", disabledBackground: "#FF675F" },
    text: {
      primary: "#ff2103",
      secondary: "#FF503E",
      disabled: "#ff675f",
    }
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 500,
      textTransform: "uppercase",
      // lineHeight: "1.5em",
    },
    h3: {
      fontSize: "1.05rem",
      fontWeight: 500,
      textTransform: "uppercase",
      // lineHeight: "1.5em",
    },
    h4: {
      fontFamily: "Ballantines",
    },
    body1: {
      fontSize: 24,
      textTransform: "uppercase",
    },
    body2: {
      fontSize: 20,
      textTransform: "uppercase",
    },
    fontFamily: ["Lazy Dog", "sans-serif"].join(","),
  },
});

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.down("md")]: {
    fontSize: 20,
  },
}

theme.typography.body2 = {
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
}

const Redirect = ({ href }: { href: string }) => {
  var elemDiv = document.createElement("div");
  elemDiv.style.cssText =
    "top:0;left:0;right:0;bottom:0;z-index:100000000;background-color:#fbc7bd;position:fixed;";
  document.body.appendChild(elemDiv);

  window.location.replace(href);
  return null;
};

function App() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      setLanguage(lng);
    });
  }, [i18n]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="accomodations" element={<Accomodations />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="rsvp" element={<RSVP />} />
            <Route path="registry" element={<Registry />} />
            <Route path="welcome-evening" element={<SecretDinner />} />
            <Route
              path="photos"
              element={
                <Redirect href="https://beauvideophotop.pic-time.com/-thomasmaxime/gallery" />
              }
            /> */}

            {/* Redirect to home */}
            {/* <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router> */}
    </ThemeProvider>
  );
}

export default App;
