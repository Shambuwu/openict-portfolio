import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid} from "@mui/material";
import Terminal, {TerminalOutput} from "react-terminal-ui";

function CriticalJudgement() {
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
                Kritisch Oordelen
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Op deze pagina wordt besproken hoe de student kritisch heeft geoordeeld gedurende het traject.
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
                        Trello naar Jira
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        De projectgroep had, wegens ervaring, in het begin besloten om met Trello te werken. Gedurende de twee maanden dat er gewerkt werd met Trello, verloor de student vaak overzicht over alle user stories.
                        De student besloot dus aan zijn projectgroep voor te leggen om over te stappen naar Jira. Het argument hierachter was een visueel duidelijkere structuur en een betere manier om tijdsduur per ticket te registeren.
                        Uiteindelijk is besloten om van Trello over te stappen naar Jira.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071467698611048488/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%", width: "100%"}}
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071467178324402176/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "10%", width: "70%"}}
                        />
                    </motion.div>
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
                        Docker
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        De ontwikkelomgevingen in de projectgroep waren erg verschillend. Er waren Linux en Windows gebruikers. Hierdoor was het van belang dat er een manier van ontwikkeling was waarop geen projectgenoot last had van compatibiliteitsproblemen.
                        De student had al ervaring ontwikkeld op het gebied van Docker. De student besloot dit voor te leggen aan de projectgenoten. Uiteindelijk werd hierdoor besloten om de huidige applicaties te "Dockerizen" en toekomstige applicaties gelijk
                        in Docker te ontwikkelen.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071467178324402176/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "10%", width: "70%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default CriticalJudgement