import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid} from "@mui/material";
import Terminal, {TerminalOutput} from "react-terminal-ui";

function Planning() {
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
                Planning
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Op deze pagina wordt besproken hoe de student kritisch heeft gepland gedurende het traject.
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
                        Scrum
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Als het gaat om het laten zien van de kwaliteit van "Plannen", is het gebruik van een Jira board en Scrumplanning elke twee weken door de student een uitstekende manier om deze vaardigheid te tonen.
                        Een Jira board is een fysiek of digitaal bord waarop de taken en verantwoordelijkheden van het team worden bijgehouden,
                        terwijl een Scrumplanning elke twee weken is bedoeld om de voortgang van het project te evalueren en de volgende stappen te plannen.
                        Door het gebruik van een Jira board kan de projectgroep de taken visueel organiseren, prioriteren en bijhouden welke taken zijn voltooid en welke nog moeten worden gedaan.
                        Een Scrumplanning elke twee weken bood de gelegenheid om te reflecteren op de voortgang van het project en om eventuele wijzigingen in de planning aan te brengen.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1078779561526964294/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%", width: "100%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Planning;