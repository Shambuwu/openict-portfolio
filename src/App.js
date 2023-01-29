import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile";
import CustomDivider from "./components/CustomDivider";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Competences from "./components/Competences";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import DarkModeContext from "./hooks/DarkModeContext";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Qualities from "./components/Qualities";

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
        <div className={"App"}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
                    <Navbar />
                </DarkModeContext.Provider>
                <Profile />
                <CustomDivider text={"Wat heb ik gedaan?"} />
                <About />
                <CustomDivider text={"Wat heb ik geleerd?"} />
                <Skills />
                <CustomDivider text={"Wat heb ik gemaakt?"} />
                <Projects />
                <CustomDivider text={"Welke kwaliteiten heb ik laten zien?"} />
                <Qualities />
                <CustomDivider text={"Wat heb ik geleerd?"} />
            </ThemeProvider>
        </div>
    )
}

// <main>

// </main>

export default App;
