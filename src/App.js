import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar.tsx"
import Profile from "./components/Profile.tsx"
import Projects from "./components/Projects.tsx"
import Skills from "./components/Skills.tsx"
import Competences from "./components/Competences.tsx"
import CustomDivider from "./components/CustomDivider.tsx";
import About from "./components/About.tsx";
import {useState} from "react";
import DarkModeContext from "./hooks/DarkModeContext.tsx";

const font = "'Space Mono', monospace"

function App() {
    const [darkMode, setDarkMode] = useState("dark");

    const theme = createTheme({
        palette: {
            mode: darkMode,
            primary: {
                main: "#1b5c76",
            },
            secondary: {
                main: "#76351b"
            },
        },
        typography: {
            fontFamily: font
        },
        components: {

        }
    })

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
              <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
                  <Navbar />
              </DarkModeContext.Provider>
              <Profile />
              <CustomDivider text={"Wat heb ik geleerd?"} />
              <About />
              <CustomDivider text={"Wat heb ik geleerd?"} />
              <Skills />
              <CustomDivider text={"Wat heb ik gedaan?"} />
              <Projects />
              <CustomDivider text={"Wat heb ik geleerd?"} />
              <Competences />
              <CustomDivider text={"Wat heb ik geleerd?"} />
          </div>
      </ThemeProvider>
  );
}

// <main>

// </main>

export default App;
