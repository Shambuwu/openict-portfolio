import {Box, Grid, Paper, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";

interface Props {

}
export default function About(props: Props) {
    return (
        <Grid container spacing={3} sx={{paddingLeft: "10px", paddingRight: "10px"}}>
            <Grid item xs={7} sx={{marginTop: "auto", marginBottom: "auto"}}>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Typography color={"secondary"} gutterBottom variant="h5" component="div">Inleiding</Typography>
                    <Typography variant="body1" color="inherit" align={"left"}>
                        De open leerroute ICT is een keuzesemester waar studenten een periode van een halfjaar werken aan het realiseren van een professioneel beroepsproduct.
                        Dit portfolio is gemaakt met het doel om de lezer inzicht te geven over de ontwikkeling van de student tijdens het realiseren van dit beroepsproduct. De student heeft gewerkt
                        binnen een bepaalde rol gedurende dit semester, in dit geval als backend developer. In dit portfolio zullen bewijsstukken opgeleverd worden. Deze dienen als manier
                        om de ontwikkeling van de student, in de rol van backend developer, aan te tonen.
                        {/*De open leerroute ICT is een keuzesemester waar studenten als ik een semester lang werken aan het*/}
                        {/*realiseren van een professioneel beroepsproduct. Studenten werken binnen een bepaalde rol tijdens het realiseren*/}
                        {/*van dit product. Het idee is dat studenten niet beoordeeld worden op basis van tentamens, maar op basis de kennis*/}
                        {/*die is opgedaan tijdens het project. Een zeer interessante methodiek van beoordeling, voor sommige studenten misschien*/}
                        {/*zelfs een uitnodiging om een halfjaar achterover te leunen, want gratis EC! Sorry, ik dwaal af. In ieder geval,*/}
                        {/*ik heb dit semester deelgenomen aan de open leerroute ICT. Ik hoor je denken: "Hoe verliep dat nou in praktijk dan!?"*/}
                        {/*Geen zorgen, alles staat gedocumenteerd in dit portfolio, dus lees gerust verder :^)*/}
                    </Typography>
                </motion.div>
            </Grid>
            <Grid item xs={5}>
                <Box
                    component={"img"}
                    // src={"https://opendidact.nl/wp-content/uploads/2021/10/cropped-robot_on_lamp.png"}
                    sx={{boxShadow: 3, borderRadius: 2, width: "75%"}}
                />
            </Grid>
            <Grid item xs={5}>
                <Box
                    component={"img"}
                    // src={"https://miro.medium.com/max/800/1*SZK7j8dPQuaecmaeJoWxwA.jpeg"}
                    sx={{boxShadow: 3, borderRadius: 2, width: "75%"}}
                />
            </Grid>
            <Grid item xs={7} sx={{marginTop: "auto", marginBottom: "auto"}}>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Typography color={"secondary"} gutterBottom variant="h5" component="div">OpenICT</Typography>
                    <Typography variant="body1" color="inherit" align={"left"}>
                        De open leerroute ICT geeft studenten de mogelijkheid om hun kennis te verbreden op een beroepsactiviteit dat het best bij de student past. Tijdens dit traject wordt er gewerkt aan het realiseren van een professioneel
                        beroepsproduct. De student om zijn ontwikkeling te richten op het gebied van backend development. De keuzes van de student zijn vastgelegd en zullen worden toegelicht in dit portfolio.
                        {/*Na de kennismaking met mijn medestudenten werd ik toegewezen aan een tijdelijk project.*/}
                        {/*Hier leerde ik mijn projectgenoten voor de rest van het semester kennen. Aan ons werd de taak gegeven om het mobiele platform van de Hanzehogeschool check-in app te repareren en te verbeteren. Niemand van ons had echter*/}
                        {/*ervaring met mobile development, laat staan dat het opzetten van een Flutter omgeving nog redelijk complex is.*/}
                        {/*<br/><br/>*/}
                        {/*De eerste paar weken werden gebruikt om een Flutter environment werkend te hebben en om een beetje kennis te maken met Flutter.*/}
                        {/*Na een paar wekend rond te hebben gekloot, had ik een simpele Flutter applicatie neergezet, de Grol generator.*/}
                        {/*Deze zou willekeurige grappen van een moppen API halen, en deze displayen op de UI. Vrij simpel dus.*/}
                        {/*Ik ben helaas dit project kwijtgeraakt nadat ik de OS van mijn laptop compleet had gesloopt (Arch experience), er zijn nog wel gelukkig screenshots beschikbaar.*/}
                        {/*Na het helpen opstellen van de Flutter omgevingen bij mijn projectgenoten hebben zij ook wat makkelijke applicaties gemaakt.*/}
                        {/*<br/><br/>*/}
                        {/*<span style={{fontSize: "14px", color: "gray"}}>(Voor meer informatie over wat ik met Flutter heb gedaan, zie: "Wat heb ik geleerd?")</span>*/}
                    </Typography>
                </motion.div>
            </Grid>
            {/*<Grid item xs={7} sx={{marginTop: "auto", marginBottom: "auto"}}>*/}
            {/*    <motion.div*/}
            {/*        initial={{ opacity: 0, scale: 0 }}*/}
            {/*        whileInView={{ opacity: 1, scale: 1 }}*/}
            {/*        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}*/}
            {/*        viewport={{ once: true }}*/}
            {/*    >*/}
            {/*        <Typography color={"secondary"} gutterBottom variant="h5" component="div">Gevangen in het ongewisse</Typography>*/}
            {/*        <Typography variant="body1" color="inherit" align={"left"}>*/}
            {/*            Aparte tussenkop, ik weet het, maar de betekenis erachter zal spoedig bekend raken. Nadat we onze Flutter applicaties hadden gedemonstreerd, kregen we te*/}
            {/*            horen dat we opzoek moesten gaan naar een *real* opdrachtgever. Wat er in werkelijkheid gebeurde, is dat wij allemaal een beetje achterover gingen leunen,*/}
            {/*            wachten totdat er een opdrachtgever naar ons zou komen. Dit bleek echter niet het geval te zijn, waardoor we de volgende weken vrij weinig hadden gedaan.*/}
            {/*            Bastiaan was op dit punt ook al overgestapt naar het "concurrerende" groepje studenten. Dit groepje zou verder werken aan de check-in tool. Terwijl zij*/}
            {/*            lekker bezig waren, zaten wij eigenlijk een beetje rond de dwalen. Achteraf gezien was dit een best grote red flag, het feit dat wij allemaal best wel lui waren.*/}
            {/*            <br/><br/>*/}
            {/*            Gelukkig kwam één van mijn docenten, Ronald van Dijk, uiteindelijk met twee opdrachtgevers. Zo leerden wij kennismaken met Yang Soo Kloosterhof van Powerchainger.*/}
            {/*            Het project dat Yang Soo voor ogen had, leek in het begin iets te uitdagend. Hoewel het concept ons behoorlijk aansprak, leek de verwachting die Yang Soo*/}
            {/*            van ons had misschien iets te optimistisch. Gelukkig, na een tweede gesprek en een hoop verduidelijking, bleek dit project right up our alley te zijn...*/}
            {/*        </Typography>*/}
            {/*    </motion.div>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={5}>*/}
            {/*    <Box*/}
            {/*        component={"img"}*/}
            {/*        // src={"https://media.tenor.com/TpKEKG1s0HcAAAAd/void.gif"}*/}
            {/*        sx={{boxShadow: 3, borderRadius: 2, width: "65%"}}*/}
            {/*    />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={5} sx={{marginTop: "auto", marginBottom: "auto"}}>*/}
            {/*    <Box*/}
            {/*        component={"img"}*/}
            {/*        // src={"https://cdn.discordapp.com/attachments/759549587555352619/1069166893958696960/Power-Chainger-logo-1-removebg-preview.png"}*/}
            {/*        sx={{boxShadow: 3, borderRadius: 2, width: "65%"}}*/}
            {/*    />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={7}>*/}
            {/*    <motion.div*/}
            {/*        initial={{ opacity: 0, scale: 0 }}*/}
            {/*        whileInView={{ opacity: 1, scale: 1 }}*/}
            {/*        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}*/}
            {/*        viewport={{ once: true }}*/}
            {/*    >*/}
            {/*        <Typography color={"secondary"} gutterBottom variant="h5" component="div">De Powerchainger saga...</Typography>*/}
            {/*        <Typography variant="body1" color="inherit" align={"left"}>*/}
            {/*            Thus began the Powerchainger saga! Ik ging vol vertrouwen tegen dit project aan. De visie van Yang Soo was als volgt: mensen zijn erg onbewust met hun energieverbruik*/}
            {/*            tegenwoordig. Yang Soo's filosofie zou zijn, straf mensen niet op dat wat ze fout doen, maar beloon ze op de goede daden. Zo ontstond Powerchainger. Het idee van*/}
            {/*            Yang Soo is dat mensen beter inzicht kunnen krijgen in hun energieverbruik, zonder allemaal sensoren, meters, noem maar op in hun huizen te installeren.*/}
            {/*            Men zou punten kunnen sparen door zuiniger te leven, om als volgt deze punten weer te kunnen uitgeven aan allerlei dingen.*/}
            {/*            <br/><br/>*/}
            {/*            Waar wij van pas kwamen is het inzichtelijk maken van energieverbruik per huis. De uitdaging was het ontwikkelen van een algoritme dat op basis van*/}
            {/*            totaal wattage gebruik kan uitvogelen welke apparaten er in een huis aan zouden staan. Het idee is dat dit algoritme ontzettend veel data gevoed krijgt van individuele*/}
            {/*            apparaten. In het verbruik van deze apparaten zijn patronen te vinden en wanneer je deze vergelijkt met het totaal gebruik kunnen er correlaties ontstaan. Hoe hoger*/}
            {/*            de accuracy van deze correlaties, hoe meer je kan constateren dat er dus een specifiek apparaat aan staat.*/}
            {/*            <br/><br/>*/}
            {/*            In het begin waren we erg zoekend naar hoe we dit project gingen aanpakken.*/}
            {/*            Zo wisten we niet zeker of we met een monolithisch structuur of een meer microservice gericht structuur gingen werken. Uiteindelijk kozen we voor een*/}
            {/*            Django monolith. Deze centrale API zou data ontvangen van slimme meters en slimme stekkers.*/}
            {/*            Vervolgens zou deze data door het algoritme gegooid moeten worden en boem! Een apparaat wordt herkend door het totale energieverbruik!*/}
            {/*            <br/><br/>*/}
            {/*            Met de nieuwe baan die ik destijds had gescoord als back-end developer leek niks meer onmogelijk. Bij het bedrijf waar ik werkte, werd*/}
            {/*            veel met Docker gewerkt. Nadat ik Docker een beetje onder de knie had, begon er een soort obsessie... Dockerize dit, Dockerize dat,*/}
            {/*            MEER DOCKER CONTAINERS!!! Deze nieuwe vaardigheid bleek ook goed van pas te komen, gezien de vorige twee programmeurs die aan Powerchainger hadden gewerkt*/}
            {/*            ook met Docker werkten.*/}
            {/*        </Typography>*/}
            {/*    </motion.div>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sx={{marginTop: "50px"}}>*/}
            {/*    <Box sx={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>*/}
            {/*        <motion.div*/}
            {/*            initial={{ opacity: 0, scale: 0 }}*/}
            {/*            whileInView={{ opacity: 1, scale: 1 }}*/}
            {/*            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}*/}
            {/*            viewport={{ once: true }}*/}
            {/*        >*/}
            {/*            <Typography color={"secondary"} gutterBottom variant="h5" component="div">...Hoe het afliep</Typography>*/}
            {/*            <Typography variant="body1" color="inherit" align={"left"}>*/}
            {/*                Het project leek echter wat minder soepel te verlopen dan gehoopt. Zo ontstonden er frustraties tussen*/}
            {/*                projectgenoten. Niet iedereen contribueerde even veel aan het project. Hierdoor groeiden irritaties naar elkaar beetje bij beetje.*/}
            {/*                <br/><br/>*/}
            {/*                Met minder afleiding waren we wel stukken meer productief, maar ook dit was niet genoeg.*/}
            {/*                Ik wil mezelf niet als heilige doen overkomen, maar er was zeker een gigantische kloof tussen hoeveel elk projectgenoot heeft opgeleverd. Hoewel ik zelf*/}
            {/*                waarschijnlijk ook eerder had kunnen beginnen, voel ik me alsnog een beetje in de maling genomen.*/}
            {/*                <br/><br/>*/}
            {/*                Tot op het moment dat ik dit schrijf, staat er geen algoritme. Ik heb de hele datastroom opgezet, de back-end structuur, alles in containers gezet,*/}
            {/*                ik heb een front-end gebouwd, ik heb een service gemaakt voor het algoritme die dient als makkelijke interface voor de Data API.*/}
            {/*                Er is mij ook beloofd door één van mijn projectgenoten dat hij het algoritme zou maken, toch zie ik niks.*/}
            {/*            </Typography>*/}
            {/*        </motion.div>*/}
            {/*        <motion.div*/}
            {/*            initial={{ opacity: 0, scale: 0 }}*/}
            {/*            whileInView={{ opacity: 1, scale: 1 }}*/}
            {/*            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}*/}
            {/*            viewport={{ once: true }}*/}
            {/*        >*/}
            {/*            <Typography sx={{marginTop: "50px"}} color={"secondary"} gutterBottom variant="h5" component="div">Mijn reflectie</Typography>*/}
            {/*            <Typography variant="body1" color="inherit" align={"left"}>*/}
            {/*                Het is misschien een somber einde van het project en ik ben redelijk teleurgesteld. Aan de andere kant heb ik ook heel veel geleerd.*/}
            {/*                Ik snap nu beter hoe een CI/CD pipeline opgesteld wordt, of het ontwikkelen met React en Javascript. Ook had ik nog nooit gewerkt met Django,*/}
            {/*                uberhaupt niet met Python (stiekem wel maar ik haat Python gewoon). Natuurlijk heb ik ook een KLEIN beetje Flutter geleerd :^3*/}
            {/*                <br/><br/>*/}
            {/*                Achteraf had ik misschien meer leiderschap moeten tonen. Ik ben redelijk verlegen, dus ik vind het aanspreken van projectgenoten moeilijk.*/}
            {/*                Hier moet ik wel aan gaan werken, gezien ik waarschijnlijk mijn hele leven langs in teamverband zal gaan werken. Alsnog vind ik ook dat mijn*/}
            {/*                projectgenoten zelf verantwoordelijk zijn voor hun contributie.*/}
            {/*            </Typography>*/}
            {/*        </motion.div>*/}
            {/*    </Box>*/}
            {/*</Grid>*/}
        </Grid>
    )
}
