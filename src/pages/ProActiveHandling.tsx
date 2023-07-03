import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid} from "@mui/material";
import Terminal, {TerminalOutput} from "react-terminal-ui";

function ProActiveHandling() {
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
                Pro-actief Handelen
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Op deze pagina wordt besproken hoe de student zijn pro-actieve handelingen heeft bewezen gedurende het traject.
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
                        Frontend applicatie
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        De student heeft zijn pro-actieve houding laten zien toen hij aan een frontend werkte voor een project.
                        Hij realiseerde zich dat het maken van curl requests om datacollectie te stoppen/starten tijdens het ontwikkelingsproces vertraging zou veroorzaken en de efficiëntie zou verminderen.
                        In plaats van te wachten tot het probleem zich voordeed, nam de student het initiatief om het probleem op te lossen voordat het zich zou voordoen.
                        <br/>
                        <br/>
                        Door deze proactieve benadering kon de student mogelijke problemen voorkomen en het ontwikkelingsproces soepeler laten verlopen. Hij toonde zijn betrokkenheid bij het project door te streven naar efficiëntie en kwaliteit in de frontend-ontwikkeling.
                        <br/>
                        <br/>
                        Kortom, de proactieve houding van de student bij de frontend illustreert zijn vermogen om problemen vroegtijdig te identificeren en aan te pakken. Zijn initiatief toont zijn toewijding aan het leveren van hoogwaardige frontend-oplossingen en zijn streven naar succes in het project.

                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071361809807847484/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%", width: "100%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default ProActiveHandling;