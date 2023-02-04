import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid} from "@mui/material";

function Communication() {
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
                Communicatie
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Communicatie ging voornamelijk via Discord en WhatsApp zoals ik al verteld had. Op onze Discord server was ook een Webhook verbonden. Deze liet iedereen weten wanneer er er gepushed werd, comments gemaakt werden, PRs gemaakt werden, etc,
                bij onze repositories. Hieronder staan voorbeelden van de communicatie.
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
                        Discord
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Op de screenshots rechts is een voorbeeld van onze communicatie via Discord. Geert had hier bijvoorbeeld een probleempje met zijn virtual environment, dus toen hielp ik hem even. Ook online meetings gingen via Discord.
                        Er was af en toe iemand ziek, deze persoon deed dan online mee. Zo kon een ontbrekend projectgenoot alsnog meekregen wat er bij de "offline" meetings gebeurde.
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071507243603869787/image.png"}
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
                        WhatsApp
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Zoals ik eerder al zei ging communicatie via WhatsApp meer over "persoonlijke" zaken. Rechts is bijvoorbeeld een screenshot van Geert die aangeeft dat hij later is, omdat zijn wekker niet afging.
                        Dit is een goed voorbeeld van hoe onze WhatsApp groep werd gebruikt.
                    </Typography>
                </Grid>
                <Grid item xs={5} marginTop={"30px"}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1071518716686258206/image.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Communication;