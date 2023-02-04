import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Button, Grid} from "@mui/material";
import Terminal, {TerminalOutput} from "react-terminal-ui";

function Django() {
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
                Django
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Ik heb ook veel geleerd van Django. Hier had ik voorheen nog niet mee gewerkt, voornamelijk omdat ik het liefst ver weg blijf van alles Python.
                Alsnog was het zeker leerzaam. Zo heb ik het bouwen van een API en een microservice geleerd. Ik heb veel gewerkt aan de Powerchainger Data API
                en de Powerchainger algorithm service. De data API is verantwoordelijk voor het ontvangen en versturen van data en de service is verantwoordelijk voor het
                toepassen van het algoritme op deze data.
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
                        De Data API is verantwoordelijk voor het verzamelen en versturen van data. Deze API is uiteraard te bereiken met cURL requests, dus rechts is een simpel voorbeeld.
                        Uiteindelijk heb ik ook tests geschreven en deze automatisch laten uitvoeren voor elke push en PR met Github Actions.
                        Zo heb ik ook wat ervaring opgedaan met het opstellen van en CI pipeline.
                        De API staat online op het moment en is samen met de source code te bezoeken via de knoppen hieronder.
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
                    Deze command kunt u uitvoeren in uw terminal
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071373754506154034/Screen_Shot_2023-02-04_at_11.16.29.png"}
                            sx={{width: "100%", marginTop: "20px"}}
                        />
                    </motion.div>
                    Github CI Pipeline
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
                        De Powerchainger algorithm service is helaas nog niet afgemaakt. Deze zou data van de Data API accepteren en hierop het algoritme toepassen.
                        Het skelet voor deze service staat al wel klaar. Deze is hieronder te bezoeken. Dit is het eerste onderdeel van het project waar ik CI op heb toegepast.
                        Ik maakte namelijk gebruik van Github Actions om de tests die ik geschreven heb automatisch te laten uitvoeren.
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
        </>
    )
}

export default Django;