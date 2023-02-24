import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid} from "@mui/material";
import Terminal, {TerminalOutput} from "react-terminal-ui";

function Adaptability() {
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
                Aanpassingsvermogen
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Op deze pagina wordt besproken hoe de student zijn aanpassingsvermogen heeft bewezen gedurende het traject.
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
                        Backend veranderingen
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        De student hij zijn aanpassingsvermogen bewezen door zich aan te passen aan verschillende veranderingen in het project.
                        Allereerst moest de student zich aanpassen aan meerdere iteraties van de backend waaraan hij werkte.
                        In plaats van vast te houden aan zijn oorspronkelijke plan, moest hij zich aanpassen aan nieuwe eisen van de backend.
                        Dit vereiste een flexibele aanpak en het vermogen om snel te leren en zich aan te passen aan veranderende situaties.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078782197680582686/Screen_Shot_2023-02-24_at_21.55.03.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%", width: "100%"}}
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
                        Minder projectleden
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Bovendien moest de student zich aanpassen aan een verandering in de projectgroep.
                        De oorspronkelijke projectgroep bestond uit 5 personen, maar later vertrokken er 2 projectleden, wat betekende dat de groep kleiner werd en de verantwoordelijkheden van de teamleden anders werden verdeeld.
                        De student moest zich snel aanpassen aan de nieuwe groepssamenstelling en de veranderingen in de verantwoordelijkheden, hierdoor kwam bijvoorbeeld onderzoek over het algoritme in de handen van de student.
                        Dit vereiste een open geest en de bereidheid om samen te werken en te communiceren met de overgebleven teamleden.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                </Grid>
            </Grid>
        </>
    )
}

export default Adaptability;