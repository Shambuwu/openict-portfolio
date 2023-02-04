import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Button, Grid} from "@mui/material";

function Docker() {
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
                Docker
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Alle onderdelen van het project maken gebruik van Docker containers. Docker is een tool die ik voornamelijk heb opgepakt tijdens werk.
                Ik moest op werk ook veel werken met Docker, zo begon ik het ook langzaam toe te passen op het Powerchainger project.
                Ook heb ik gebruik gemaakt van docker-compose, zodat je niet alle containers handmatig hoeft te builden.
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
                        Powerchainger algorithm front-end
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Zie als voorbeeld rechts de Dockerfile en docker-compose.yml van de Powerchainger front-end. De Dockerfile maakt in dit geval een container voor de applicatie.
                        De docker-compose.yml file is meer verantwoordelijk voor de environment van de applicatie. Dit is een enkel voorbeeld van een Docker setup, deze staan in alle onderdelen van het Powerchainger project.
                    </Typography>
                    <Button href={"https://github.com/Shambuwu/powerchainger-alg-frontend"}>
                        Source code
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1071450661469835365/Screen_Shot_2023-02-04_at_16.22.13.png"}
                            sx={{boxShadow: 3, borderRadius: 2, width: "99%"}}
                        />
                    </motion.div>
                    docker-compose.yml
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://media.discordapp.net/attachments/759549587555352619/1071452323894796358/Screen_Shot_2023-02-04_at_16.28.55.png"}
                            sx={{boxShadow: 3, borderRadius: 2, width: "99%", marginTop: "20px"}}
                        />
                    </motion.div>
                    Dockerfile
                </Grid>
            </Grid>
        </>
    )
}

export default Docker;