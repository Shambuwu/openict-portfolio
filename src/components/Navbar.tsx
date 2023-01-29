import {AppBar, Toolbar, IconButton, Button, Box} from "@mui/material";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
// @ts-ignore
import DarkModeContext from "../hooks/DarkModeContext.tsx";
import {useContext, useRef} from "react";
// @ts-ignore
import GradientBackground from "./GradientBackground.tsx";
import HomeIcon from '@mui/icons-material/Home';
// @ts-ignore
import RefContext from "../hooks/RefContext.tsx";

interface Props {

}

export default function Navbar(props: Props) {
    const [darkMode, setDarkMode] = useContext(DarkModeContext)
    const ref = useContext(RefContext);

    const scrollTo = () => {
        // @ts-ignore
        ref.current?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div>
            <AppBar position={"fixed"}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button color={"inherit"} onClick={scrollTo}>test</Button>
                        <Button color={"inherit"}>test</Button>
                        <Button color={"inherit"}>test</Button>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        OpenICT Portfolio
                    </Typography>
                    {darkMode === "dark" ? (
                        <Button color="secondary" onClick={() => {setDarkMode("light")}}>Light Mode</Button>
                    ):(
                        <Button color="inherit" onClick={() => {setDarkMode("dark")}}>Dark Mode</Button>

                    )}
                </Toolbar>
            </AppBar>
            <GradientBackground />
        </div>
    )
}
