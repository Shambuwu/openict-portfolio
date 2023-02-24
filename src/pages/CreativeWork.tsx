import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid} from "@mui/material";
import Terminal, {TerminalOutput} from "react-terminal-ui";

function CreativeWork() {
    return(
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
                Creatief Werken
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Tijdens het realiseren van de beroepsproducten is de student tegen meerdere problemen aangelopen.
            </Typography>
            <CustomDivider text={"Bewijsstukken"} />
            <Grid container spacing={0} sx={{width: "95%"}}>
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
                        De Powerchainger VPS
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Powerchainger hoste twee componenten op hun VPS. Een proxyserver, dit is dezelfde proxyserver die wij hebben aangepast, en een dataprocessor. De dataprocessor was gemaakt door twee medewerkers van Powerchainger.
                        We liepen echter tegen een paar problemen aan. De dataprocessor werkte met een andere datastructuur dan onze p1-reader, de projectgroep had moeite met het draaiend krijgen van deze dataprocessor en de dataprocessor had nog
                        geen rekening gehouden met een mogelijke toevoeging van een algoritme, hierdoor zou het extra werk kosten om deze aan te passen naar een structuur die dat wel zou ondersteunen.
                        Dus, besloot de projectgroep een eigen dataprocessor te maken. Dit is nu de "Powerchainger algorithm server".
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Terminal name={"Powerchainger Data API"} height={"100px"}>
                        <TerminalOutput>curl http://shambuwu.com:8000</TerminalOutput>
                        <TerminalOutput>Powerchainger algorithm API.</TerminalOutput>
                    </Terminal>
                </Grid>
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
                        De Webinterface
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Ook de webinterface is gemaakt als oplossing op een probleem waar de projectgroep tegenaan liep. Namelijk het besturen van datacollectie. Voordat de webinterface bestond, moesten gebruikers handmatig curl requests sturen.
                        Één request om de datacollectie te starten en één request om de datacollectie te stoppen. Gezien dit niet heel erg gebruiksvriendelijk is, besloot de student een webinterface te maken. Doormiddel van een web grafische interface
                        kunnen gebruikers makkelijk hun datacollectie stoppen/starten en meegeven welk apparaat gemeten wordt.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Terminal name={"Powerchainger Data API"} height={"100px"}>
                        <TerminalOutput>curl http://shambuwu.com:8000/data/stop_measurement/kevin</TerminalOutput>
                        <TerminalOutput>curl http://shambuwu.com:8000/data/start_measurement/kevin/test</TerminalOutput>
                    </Terminal>
                </Grid>
            </Grid>
        </>
    )
}

export default CreativeWork;