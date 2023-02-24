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
                        De Server, anders genoemd de "powerchainger-alg-server", is verantwoordelijk voor het beheren van alle data. Er kan middels HTTP requests data verstuurd en opgehaald worden uit de server. De verstuurde data wordt opgeslagen in
                        CSV-bestanden. Deze worden uitgelezen tijdens het ophalen van de data.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078740586749771926/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%"}}
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1078741977794883675/image.png"}
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
                        Docker
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Gedurende het project heeft de student kennis opgedaan over DOcker en de toepassing hiervan in een software-ontwikkelomgeving. De student is dankzij zijn bijbaan als backend developer bekend geraakt
                        met de basisprincipes van Docker. Tijdens de eerste sprints van het Powerchainger project heeft de student zijn kennis van Docker verder uitgebreid door zich te verdiepen in geavanceerdere onderwerpen, zoals het gebruik van Docker Compose
                        voor het opzetten van meerdere containers.
                    </Typography>
                </Grid>
                <Grid item xs={5} marginTop={"30px"}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078742460710264963/image.png"}
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
                        Jupyter Notebooks
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Voor het ontwikkelen en documenteren van data-analyse en -visualisatie heeft de student gewerkt met Jupyter Notebooks.
                        Een begeleider van OpenICT heeft de student inzicht gegeven over het creëren van een Jupyter Notebook voor het analyseren van een dataset.
                        Hierbij heeft de student gebruik gemaakt van de notebook interface om code te schrijven, data te manipuleren en visualisaties te genereren.
                        Daarnaast heeft de student geleerd hoe Markdown kan worden gebruikt om documentatie en uitleg bij de code en visualisaties te schrijven.
                    </Typography>
                </Grid>
                <Grid item xs={5} marginTop={"30px"}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078745221753475072/image.png"}
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
                        Backend Ontwikkeling
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Gedurende het traject heeft de student kennis opgedaan op het gebied van backend ontwikkeling. Niet alleen was de student gedurende het traject werkend als backend developer, ook heeft de student
                        leren werken met nieuwe backend ontwikkelingsprincipes. De projectgroep van de student had besloten om met een backend framework genaamd Django te gaan werken. Na uitgebreid onderzoek kwam de projectgroep erachter
                        dat Django het meest geschikt is voor data science. Python heeft beschikking tot vele "libraries" die het makkelijk maken voor de gebruiker om data te visualiseren, manipuleren, collecteren, aggregeren, etc.
                    </Typography>
                </Grid>
                <Grid item xs={5} marginTop={"30px"}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1078746553612763246/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default QualityProduct;