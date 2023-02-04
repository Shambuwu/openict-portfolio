import React, {useState} from "react";
import DarkModeContext from "../hooks/DarkModeContext";
import Profile from "../components/Profile";
import CustomDivider from "../components/CustomDivider";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Qualities from "../components/Qualities";
import Navbar from "../components/Navbar";

function Home() {
    const [darkMode, setDarkMode] = useState(null);

    return (
        <>
            <Profile />
            <CustomDivider text={"Wat heb ik gedaan?"} />
            <About />
            <CustomDivider text={"Wat heb ik geleerd?"} />
            <Skills />
            <CustomDivider text={"Wat heb ik gemaakt?"} />
            <Projects />
            <CustomDivider text={"Welke kwaliteiten heb ik laten zien?"} />
            <Qualities />
            <CustomDivider text={"Fin"} />
        </>
    )
}

export default Home;