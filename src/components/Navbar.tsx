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
import {motion} from "framer-motion";

interface Props {

}

export default function Navbar(props: Props) {
    const [darkMode, setDarkMode]: any = useContext(DarkModeContext)

    return (
        <div>
            <AppBar position={"fixed"}>
                <Toolbar>
                    <motion.div
                        whileTap={{ scale: 0.8 }}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            href={"/"}
                            sx={{ mr: 2 }}
                        >
                            <HomeIcon />
                        </IconButton>
                    </motion.div>
                    {/*<Box sx={{ display: { xs: 'none', sm: 'block' } }}>*/}
                    {/*    <Button color={"inherit"} href={"/test"}>test</Button>*/}
                    {/*    <Button color={"inherit"} href={"/test"}>test</Button>*/}
                    {/*    <Button color={"inherit"} href={"/test"}>test</Button>*/}
                    {/*</Box>*/}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        OpenICT Portfolio
                    </Typography>
                    <motion.div
                        whileTap={{ scale: 0.8 }}
                    >
                        {darkMode === "dark" ? (
                            <Button color="secondary" onClick={() => {setDarkMode("light")}}>Light Mode</Button>
                        ):(
                            <Button color="inherit" onClick={() => {setDarkMode("dark")}}>Dark Mode</Button>

                        )}
                    </motion.div>
                </Toolbar>
            </AppBar>
            <GradientBackground />
        </div>
    )
}
