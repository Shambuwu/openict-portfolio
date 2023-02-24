import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid} from "@mui/material";
import Terminal, {TerminalOutput} from "react-terminal-ui";

function MessageDelivery() {
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
                Boodschap Overbrengen
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Op deze pagina wordt besproken hoe de student zijn boodschappen heeft overgebracht gedurende het traject.
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
                        README.md
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Als het gaat om het overbrengen van informatie binnen een technisch project, is het schrijven van een goede README.md file een uitstekende manier om de kwaliteit van "Boodschap overbrengen" te laten zien.
                        Een README.md file is een document dat vaak wordt gebruikt om de gebruiker te informeren over de werking van het project en hoe deze kan worden gebruikt.
                        Het schrijven van een effectieve README.md file vereist het vermogen om complexe technische informatie in eenvoudige en duidelijke taal uit te leggen en om de belangrijkste functies van het project te benadrukken.
                        Door een goed geschreven README.md bestand te produceren, kan de gebruiker snel en gemakkelijk begrijpen wat het project doet, welke vereisten er zijn, hoe het kan worden geïnstalleerd, hoe het moet worden gebruikt, enzovoort.
                        Bovendien kan het bijdragen aan het opbouwen van vertrouwen en geloofwaardigheid in het project door duidelijkheid te bieden over de doelstellingen, licenties, auteurs en eventuele beperkingen.
                        Door het schrijven van een effectieve README.md file kan men dus een belangrijke bijdrage leveren aan het succes van het project en de gebruikerservaring.
                        <br/><br/>
                        De student heeft tijdens het traject meerdere README.md files geschreven. Deze zijn geschreven per beroepsproduct van het Powerchainger project. De README.md die rechts te zien is, is geheel geschreven door de student.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078775174775701515/Screen_Shot_2023-02-24_at_21.27.15.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%", width: "100%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default MessageDelivery;