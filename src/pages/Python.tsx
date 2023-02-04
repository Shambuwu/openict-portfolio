import React from "react";
import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Button, Grid} from "@mui/material";
import Terminal, {TerminalOutput} from "react-terminal-ui";

function Python() {
    return (
        <>
            <Typography
                sx={{marginTop: "50px"}}
                color={"secondary"}
                gutterBottom
                variant="h4"
                component={motion.div}
                animate={{ scale: [0.95, 1.00, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Python
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Ik heb een hekel aan Python. Ik haat pip en ik haat virtual environments. Leuk feitje: tijdens het project heb ik de OS van mijn laptop compleet vernietigd. Hoe? Pip.
                Ik had een virtual environment klaargezet, maar deze wou een specifieke package absoluut niet installeren. Dus dacht ik: "Nou ja, dan installeer ik deze maar globally"
                Dus ik doe lekker pip install ... en ik denk dat alles goed is gegaan. Dezelfde avond wou ik mijn laptop nog even updaten, dus ik gebruik mijn main package manager: sudo pacman -Syu.
                Errors. Dependency errors. Waarom? Pip had besloten om alle packages in mijn virtual environment lokaal te installeren. Nu had ik honderderen dependency conflicts. Ik heb geprobeerd
                dit handmatig op te lossen, maar tevergeefs. En dus moest ik mijn OS wipen, en een nieuwe OS installeren. Ik haat Python.
            </Typography>
            <CustomDivider text={"Voorbeelden"} />
            <Grid container spacing={0} sx={{width: "90%"}}>
                <Grid item xs={7}>
                    <Typography
                        sx={{marginTop: "50px"}}
                        color={"secondary"}
                        gutterBottom
                        variant="h5"
                        component={motion.div}
                        animate={{ scale: [0.99, 1.00, 0.99] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Powerchainger Data API
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        De Data API is gebouwd in Python (Django). Ik heb geleerd te werken met Python en het openen van CSV files, API endpoints en het maken van tests.
                    </Typography>
                    <Button href={"http://shambuwu.com:8080/"}>
                        API
                    </Button>
                    <Button href={"https://github.com/Shambuwu/powerchainger-alg-server"}>
                        Source code
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <Terminal name={"Powerchainger Data API"} height={"100px"}>
                        <TerminalOutput>curl http://shambuwu.com:8080</TerminalOutput>
                        <TerminalOutput>Powerchainger algorithm API.</TerminalOutput>
                    </Terminal>
                </Grid>
                <Grid item xs={7} marginTop={10}>
                    <Typography
                        sx={{marginTop: "50px"}}
                        color={"secondary"}
                        gutterBottom
                        variant="h5"
                        component={motion.div}
                        animate={{ scale: [0.99, 1.00, 0.99] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Powerchainger algorithm service
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Ook de Powerchainger algorithm service is gemaakt in Python (Django). Voor meer informatie zie Django pagina.
                    </Typography>
                    <Button href={"https://github.com/Shambuwu/powerchainger-alg-service"}>
                        Source code
                    </Button>
                </Grid>
                <Grid item xs={5} marginTop={10}>
                    <Terminal name={"Powerchainger Data API"} height={"100px"}>
                        <TerminalOutput>curl http://localhost:8000/test/</TerminalOutput>
                        <TerminalOutput>This is the Data view!</TerminalOutput>
                    </Terminal>
                </Grid>
            </Grid>
            <Button href={"http://shambuwu.com:3000/django"} sx={{ marginTop: "20px" }}>
                Voor meer informatie, zie Django pagina
            </Button>
        </>
    )
}

export default Python;