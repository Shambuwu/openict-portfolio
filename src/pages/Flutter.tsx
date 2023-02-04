import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Button, Grid} from "@mui/material";

function Flutter() {
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
                Flutter
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Zoals ik eerder had verteld heb ik niet heel veel Flutter gebruikt. Op deze pagina zal ik een voorbeeld laten zien.
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
                        De Grol Generator
                    </Typography>
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                        Zie rechts mijn Flutter meesterwerk: de Grol Generator. Het is een vrij simpele applicatie, wanneer je ergens op het scherm klikt wordt er een grol opgehaald van een publieke API, de MoppenBot API v3.
                        Dat is alles. Dat is het enige wat het deed. Prachtig, niet? Ik heb hier helaas geen source code meer van, gezien de OS van mijn laptop halverwege het semester kapot ging :^/
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/1023914491991314472/1027883659782533140/unknown.png"}
                            sx={{boxShadow: 3, borderRadius: 2, height: "80%"}}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Flutter;