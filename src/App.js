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
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Python from "./pages/Python";
import Javascript from "./pages/Javascript";
import React from "./pages/React";
import Django from "./pages/Django";
import Docker from "./pages/Docker";
import Flutter from "./pages/Flutter";
import Scrum from "./pages/Scrum";
import Communication from "./pages/Communication";
import KnowledgeDevelopment from "./pages/KnowledgeDevelopment";
import QualityProduct from "./pages/QualityProduct";
import CreativeWork from "./pages/CreativeWork";
import CriticalJudgement from "./pages/CriticalJudgement";
import Cooperation from "./pages/Cooperation";
import MessageDelivery from "./pages/MessageDelivery";
import Planning from "./pages/Planning";
import Adaptability from "./pages/Adaptability";

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
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />}/>
                        <Route path={"python"} element={<Python />}/>
                        <Route path={"javascript"} element={<Javascript />} />
                        <Route path={"react"} element={<React />} />
                        <Route path={"django"} element={<Django />} />
                        <Route path={"docker"} element={<Docker />} />
                        <Route path={"flutter"} element={<Flutter />} />
                        <Route path={"scrum"} element={<Scrum />} />
                        <Route path={"communication"} element={<Communication />} />
                        <Route path={"knowledge_development"} element={<KnowledgeDevelopment />} />
                        <Route path={"quality_product"} element={<QualityProduct />} />
                        <Route path={"creative_work"} element={<CreativeWork />} />
                        <Route path={"critical_judgement"} element={<CriticalJudgement />} />
                        <Route path={"cooperation"} element={<Cooperation />} />
                        <Route path={"message_delivery"} element={<MessageDelivery />} />
                        <Route path={"planning"} element={<Planning />} />
                        <Route path={"adaptability"} element={<Adaptability />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    )
}

// <main>

// </main>

export default App;
