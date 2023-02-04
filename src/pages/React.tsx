import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Button, Grid} from "@mui/material";

function React() {
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
                React
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Ik heb altijd gedacht dat back-end veel leuker is dan front-end programmeren. Nadat ik met React leerde te werken begon ik hieraan te twijfelen.
                Ik heb ontzettend veel plezier gehad met het in elkaar zetten van de Powerchainger algorithm front-end en deze webapplicatie. Ik had voorheen minimale ervaring
                met React. Het had dan ook een kleine learning curve, vooral werken met React Hooks. Inmiddels gebruik ik deze ook met gemak. Ik ben dus blij dat ik heb besloten
                om de front-end te maken in React, want blijkbaar vind ik front-end programmeren wél leuk!
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
                        Rechts is een preview te zien van de front-end die ik gebouwd heb met Javascript (React). Het is een vrij simpele applicatie,
                        deze geeft gebruikers de mogelijkheid om hun datastroom te besturen. Zo kan een gebruiker de datastroom aan- en uitzetten.
                        Dit wordt gedaan met API calls. De front-end staat op dit moment ook online, deze kunt u met de knoppen hieronder bezoeken.
                    </Typography>
                    <Button href={"http://shambuwu.com/"}>
                        Website
                    </Button>
                    <Button href={"https://github.com/Shambuwu/powerchainger-alg-frontend"}>
                        Source code
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071361809807847484/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, width: "99%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default React;