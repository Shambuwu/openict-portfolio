import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid, Link} from "@mui/material";

function QualityProduct() {
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
                Kwalitatief Product Maken
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Op deze pagina staan de beroepsproducten waar de student aan heeft gewerkt beschreven. De beroepsproducten bestaan uit de volgende onderdelen: de server, de webinterface, de p1-reader en de proxyserver.
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
                        De Server
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        De server, anders genoemd de "powerchainger-alg-server", is verantwoordelijk voor het beheren van alle data. Er kan middels HTTP requests data verstuurd en opgehaald worden uit de server. De verstuurde data wordt opgeslagen in
                        CSV-bestanden. Deze worden uitgelezen tijdens het ophalen van de data.
                        <br/><br/>
                        De student heeft aan veel onderdelen gewerkt van de server. Voorbeelden hiervan zijn de data controller, cluster controller, het ontwikkelen van tests en het opzetten van een CI structuur.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1078750800710467795/Screen_Shot_2023-02-24_at_19.50.23.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%"}}
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078751736338063441/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%", width: "100%"}}
                        />
                    </motion.div>
                </Grid>
                <Grid item xs={7} marginTop={"30px"}>
                    <Typography
                        sx={{marginTop: "50px"}}
                        color={"secondary"}
                        gutterBottom
                        variant="h5"
                        component={motion.div}
                        animate={{ scale: [0.99, 1.00, 0.99] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        De p1-reader
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        De p1-reader is een script geschreven door een andere student. Dit script is verantwoordelijk voor het ophalen en versturen van data uit een slimme meter. Deze slimme meter hangt vaak in de meterkast.
                        Deze meet het totaalverbruik, in Watt, van een huishouden. Deze data wordt elke 10 seconden naar de server gestuurd. De student heeft ervoor gezorgd dat de p1-reader draait in een Docker container.
                    </Typography>
                </Grid>
                <Grid item xs={5} marginTop={"30px"}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078752914924896358/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%", width: "100%"}}
                        />
                    </motion.div>
                </Grid>
                <Grid item xs={7} marginTop={"30px"}>
                    <Typography
                        sx={{marginTop: "50px"}}
                        color={"secondary"}
                        gutterBottom
                        variant="h5"
                        component={motion.div}
                        animate={{ scale: [0.99, 1.00, 0.99] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        De Proxyserver
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        De proxyserver was ontwikkeld door twee medewerkers van Powerchainger. Powerchainger gebruikt slimme stekkers om actief verbruik van elektrische apparaten te meten.
                        De stekkers beschikken over een API. Deze werd gebruikt om de gemeten data in te lezen. De proxyserver is verantwoordelijk voor de connectie met de slimme stekkers en het versturen
                        van deze data naar de server. Oorspronkelijk was de proxyserver geschreven voor een server van Powerchainger. Dit hebben wij aangepast om onze eigen server te ondersteunen.
                        Rechts zijn de aanpassingen op de proxyserver te zien. (Screenshot van medestudent Kevin)
                    </Typography>
                </Grid>
                <Grid item xs={5} marginTop={"30px"}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078754462144933889/changed_methods.PNG"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%"}}
                        />
                    </motion.div>
                </Grid>
                <Grid item xs={7} marginTop={"30px"}>
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
                        De webinterface is een, in React gemaakte, frontend applicatie die dient als een besturingsmechanisme voor de eindgebruiker. Via de webinterface kan de gebruiker datacollectie op de server uitzetten voor zichzelf.
                        Dit betekent dat de data die gemeten wordt van de slimme stekkers niet naar de server verstuurd wordt. Dit is zodat er niet constant nulmetingen naar de server gestuurd worden.
                        Nulmetingen, buiten het actieve verbruik van een apparaat, moeten verwaarloosd worden, omdat deze niet van toepassing zijn tijdens het classificeren van een verbruikspatroon.
                        Op deze manier bewaakt de frontend welke data wel en welke data niet verstuurd wordt. De webinterface is volledig gerealiseerd door de student.
                    </Typography>
                </Grid>
                <Grid item xs={5} marginTop={"30px"}>
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

export default QualityProduct;