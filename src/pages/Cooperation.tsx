import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import CustomDivider from "../components/CustomDivider";
import {Box, Grid, Link} from "@mui/material";

function Cooperation() {
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
                Samenwerking
            </Typography>
            <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                Bekijk <Link href={"/communication"}> communicatie</Link> voor een samenvatting van hoe de communicatie verliep tussen projectgenoten.
            </Typography>
            <CustomDivider text={"Voorbeelden"} />
            <Grid container spacing={0} sx={{width: "95%"}}>
                <Grid item xs={12}>
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
                    <Typography variant="body1" color="inherit" align={"left"} sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                        Gedurende de eerste paar maanden verliep de samenwerking prima. De projectgroep hield elkaar op de hoogte doormiddel van daily standups. Hierin vertelde elk projectlid waar hij of zij aan heeft gewerkt en waar hij of zij aan gaat werken.
                        Door tickets een tijdsduur te geven, is het zo goed in kaart te brengen hoe lang een ticket nog gaat duren. Elke twee weken werden er sprint reviews gehouden. Bij de sprint reviews reflecteerde de projectleden op de voorgaande sprint.
                        <br/><br/>
                        De student heeft tijdens de sprint reviews een aantal keer aangegeven dat hij ontevreden was over de samenwerking. Zo vond de student dat de werkverdeling niet eerlijk was. Dit werd besproken en er werd geprobeerd
                        om de werkverdeling meer gelijk te maken. Uiteindelijk verlieten twee projectgenoten de projectgroep. Hierdoor werd samenwerking een stuk nauwer.
                        <br/><br/>
                        De student ervaarde een kleinere projectgroep als fijn, omdat er nu minder afleiding was tijdens de vergaderingen. Op locatie werd regelmatig met zijn allen naar een huidig probleem gekeken en werd er actief geprobeerd
                        deze op te lossen.
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Cooperation;