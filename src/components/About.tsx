import {Box, Grid, Paper, Link} from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {

}
export default function About(props: Props) {
    let names = ["Kevin de Graaf", "Geert Perton", "Berend Korendijk", "Tom Reezigt"]

    return (
        <Grid container spacing={3} sx={{paddingLeft: "10px", paddingRight: "10px"}}>
            <Grid item xs={7} sx={{marginTop: "auto", marginBottom: "auto"}}>
                <Typography color={"secondary"} gutterBottom variant="h5" component="div">Wat is OpenICT?</Typography>
                <Typography variant="body1" color="text.secondary">
                    De open leerroute ICT is een keuzesemester waar studenten als ik een semester lang werken aan het
                    realiseren van een professioneel beroepsproduct. Studenten werken binnen een bepaalde rol tijdens het realiseren
                    van dit product. Het idee is dat studenten niet beoordeeld worden op basis van tentamens, maar op basis de kennis
                    die is opgedaan tijdens het project. Een zeer interessante methodiek van beoordeling, voor sommige studenten misschien
                    zelfs een uitnodiging om een halfjaar achterover te leunen, want gratis EC! Sorry, ik dwaal af. In ieder geval,
                    ik heb dit semester deelgenomen aan de open leerroute ICT. Ik hoor je denken: "Hoe verliep dat nou in praktijk dan!?"
                    Geen zorgen, alles staat gedocumenteerd in dit portfolio, dus lees gerust verder :^)
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <Box
                    component={"img"}
                    src={"https://opendidact.nl/wp-content/uploads/2021/10/cropped-robot_on_lamp.png"}
                    sx={{boxShadow: 3, borderRadius: 2, width: "75%"}}
                />
            </Grid>
            <Grid item xs={5}>
                <Box
                    component={"img"}
                    src={"https://opendidact.nl/wp-content/uploads/2021/10/cropped-robot_on_lamp.png"}
                    sx={{boxShadow: 3, borderRadius: 2, width: "75%"}}
                />
            </Grid>
            <Grid item xs={7}>
                <Typography color={"secondary"} gutterBottom variant="h5" component="div">De Flutterkutters</Typography>
                <Typography variant="body1" color="text.secondary">
                    Na de kennismaking met mijn medestudenten werd ik toegewezen aan een tijdelijk project.
                    Hier leerde ik mijn projectgenoten voor de rest van het semester kennen.
                    <Link></Link>
                    Op alfabetische volgorde: {names.sort().map((x, index) => index !== names.length-2 ? index !== names.length-1 ? `${x}, `: ` en ${x}` : `${x}`)}.
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <Typography color={"secondary"} gutterBottom variant="h5" component="div">Gevangen in het ongewisse</Typography>
                <Typography variant="body1" color="text.secondary">
                    Docker wordt gebruikt om softwarepakketten in 'containers' uit te voeren.
                    Deze containers zijn geïsoleerd van elkaar en bevatten hun eigen applicaties,
                    tools, bibliotheken en configuratiebestanden. Ze kunnen met elkaar communiceren
                    via specifieke kanalen. Voor het ontwikkelen van Powerchainger services heb ik veel Docker gebruikt.
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <Box
                    component={"img"}
                    src={"https://opendidact.nl/wp-content/uploads/2021/10/cropped-robot_on_lamp.png"}
                    sx={{boxShadow: 3, borderRadius: 2, width: "75%"}}
                />
            </Grid>
            <Grid item xs={5}>
                <Box
                    component={"img"}
                    src={"https://opendidact.nl/wp-content/uploads/2021/10/cropped-robot_on_lamp.png"}
                    sx={{boxShadow: 3, borderRadius: 2, width: "75%"}}
                />
            </Grid>
            <Grid item xs={7}>
                <Typography color={"secondary"} gutterBottom variant="h5" component="div">Powerchainger saga</Typography>
                <Typography variant="body1" color="text.secondary">
                    Docker wordt gebruikt om softwarepakketten in 'containers' uit te voeren.
                    Deze containers zijn geïsoleerd van elkaar en bevatten hun eigen applicaties,
                    tools, bibliotheken en configuratiebestanden. Ze kunnen met elkaar communiceren
                    via specifieke kanalen. Voor het ontwikkelen van Powerchainger services heb ik veel Docker gebruikt.
                </Typography>
            </Grid>
        </Grid>
    )
}