import logo from './logo.svg';
import './App.css';
import {createTheme, ThemeProvider, CssBaseline, Backdrop, CircularProgress} from "@mui/material";
import Navbar from "./components/Navbar.tsx"
import Profile from "./components/Profile.tsx"
import Projects from "./components/Projects.tsx"
import Skills from "./components/Skills.tsx"
import Competences from "./components/Competences.tsx"
import CustomDivider from "./components/CustomDivider.tsx";
import About from "./components/About.tsx";
import {useEffect, useRef, useState} from "react";
import DarkModeContext from "./hooks/DarkModeContext.tsx";
import RefContext from "./hooks/RefContext.tsx";

const font = "'Space Mono', monospace"

function App() {
    const [darkMode, setDarkMode] = useState("dark");
    const ref = useRef();

    const theme = createTheme({
        palette: {
            mode: darkMode,
            primary: {
                main: "#1b5c76",
            },
            secondary: {
                main: "#1b7662"
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
              <CustomDivider text={"Wat heb ik gedaan?"} />
              <About />
              <CustomDivider text={"Wat heb ik geleerd?"} />
              <RefContext.Provider value={ref}>
                  <Skills ref={ref}/>
              </RefContext.Provider>
              <CustomDivider text={"Wat heb ik gemaakt?"} />
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
