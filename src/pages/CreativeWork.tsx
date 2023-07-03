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
                        Infrastructuur
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Om een beter beeld te krijgen van het beoogde product aan het begin van het project, is een stroomdiagram opgesteld. Op deze manier is een infrastructuurontwerp gecreëerd dat effectief kon worden besproken met medegroepsleden en de projecteigenaar. Zodra de infrastructuur werd geïmplementeerd en er zich problemen voordeden die een alternatieve infrastructuur vereisten, werd het stroomdiagram aangepast, waardoor we als projectgroep iteratief konden ontwikkelen. Helaas zijn niet alle iteraties optimaal gedocumenteerd, waardoor enkele versies ontbreken.

                        Er is bewust gekozen voor een iteratieve aanpak, omdat dit de mogelijkheid bood om voortdurend te evalueren, aan te passen en te verbeteren gedurende het project. Bovendien gaf het de projectgroep de gelegenheid om regelmatig feedback te geven en actief bij te dragen aan de ontwikkeling van de infrastructuur. Door iteratief te werken, kon er snel worden ingespeeld op veranderende eisen en wensen, en ervoor worden gezorgd dat het project voldeed aan de verwachtingen van zowel de projecteigenaar als de groepsgenoten.
                    </Typography>
                </Grid>
                <Grid item xs={5} marginTop={"30px"}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/934486106123157524/1125422160354226256/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%", width: "100%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default CreativeWork;