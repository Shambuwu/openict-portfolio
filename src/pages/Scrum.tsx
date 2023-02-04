import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Button, Grid} from "@mui/material";

function Scrum() {
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
                Scrum
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Wij hebben met de Scrummethode gewerkt. We hebben voornamelijk gebruik gemaakt van Jira en Trello, waarin we onze Sprints konden bijhouden. Hieronder staan voorbeelden van hoe wij Scrum hebben toegepast tijdens het project.
                Het vaststellen van kwaliteitscriteria voor het beroepsproduct was een continu proces. Zo hebben we tijdens het proces constant nieuwe tickets toegevoegd voor het verbeteren van de kwaliteit van de software.
                In de screenshots van het Jira-board kun je bijvoorbeeld zien hoe wij "code refinement" hebben uitgevoerd. In dit geval was dit een user story waarin elk projectgenoot bezig ging met het verbeteren van de kwaliteit van de code van een specifiek onderdeel van het project.
            </Typography>
            <CustomDivider text={"Voorbeelden"} />
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
                        Trello
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Rechts is een screenshot te zien van ons Trello-board. Zoals je kan zien ziet het er vrij cluttered uit. Uiteindelijk besloot ik hierom te pushen dat we naar Jira zouden overstappen. Jira wordt
                        veel gebruikt bij mij op werk, dus wist dat dit ons erg zou kunnen helpen. Uiteindelijk hadden we dus besloten om over te stappen naar Jira.
                    </Typography>
                    <Button href={"https://trello.com/b/uoMvYiMw/powerchainger"}>
                        Trello-board
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071467698611048488/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, width: "100%"}}
                        />
                    </motion.div>
                </Grid>
                <Grid item xs={7} sx={{marginTop: "40px"}}>
                    <Typography
                        sx={{marginTop: "50px"}}
                        color={"secondary"}
                        gutterBottom
                        variant="h5"
                        component={motion.div}
                        animate={{ scale: [0.99, 1.00, 0.99] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Jira
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Het Jira-board ziet er gewoon veel beter uit en leesbaarder uit. Tickets werden toegewezen aan een enkele student. Wanneer er aan een ticket wordt gewerkt zou deze in "IN PROGRESS" worden gezet. Tickets in "INTERNAL REVIEW" vereisen
                        goedkeuring van het team om naar "DONE" te mogen. Zo zag ons proces er een beetje uit.
                        <br/><br/>
                        Tickets kregen ook een "time remaining" toegewezen. Dit is de geschatte tijdsduur van een ticket. Deze tijdsduur vogelden wij per ticket uit
                        met een methode genaamd Scrumpoker. Het idee is dat elk projectgenoot aangeeft hoeveel uur een ticket duurt. Vervolgens wordt er vergeleken, heroverwogen en uiteindelijk besloten hoe lang de desbetreffende ticket ongeveer
                        zou duren.
                    </Typography>
                    <Button href={"https://team-16691077052277.atlassian.net/jira/software/projects/PB/boards/3"}>
                        Jira-board
                    </Button>
                </Grid>
                <Grid item xs={5} sx={{marginTop: "40px"}}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071467178324402176/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Scrum;