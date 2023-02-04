import Typography from "@mui/material/Typography";
import {Grid, Link} from "@mui/material";
import {motion} from "framer-motion";

export default function Qualities() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={10} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    Ik hoop dat ik heb laten zien dat ik voldoe aan het <span style={{color: "#1b7662"}}>Juiste Kennis Ontwikkelen</span> criterium door alle ontwikkelingen waar ik mij binnen dit project mee heb bezig gehouden. Kijk bij "Wat heb ik geleerd" voor een concretisering
                    van alle dingen die ik heb gemaakt/geleerd.
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    Documentatie over het vaststellen van kwaliteitscriteria staat vooral op de <Link href={"http://shambuwu.com:3000/scrum"}>Scrumpagina</Link>, hier laat ik zien hoe ik voldoe aan het <span style={{color: "#1b7662"}}>Kwalitatief Product Ontwikkelen</span> criterium.
                </Typography>
            </Grid>
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    <span style={{color: "#1b7662"}}>Creatief werken</span>, dit criterium heb ik op verschillende manieren bewezen. Refereer naar "Wat heb ik geleerd?". Ik laat zien hoe ik verschillende programmeertalen, frameworks, tools, etc, gebruik tijdens
                    de ontwikkeling van het project.
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    Ik heb altijd geprobeerd <span style={{color: "#1b7662"}}>Kritisch te oordelen</span>. Zo herinner ik mij een keer dat ik aangaf dat mijn projectgenoten niet genoeg deden voor het project. Dit staat ook gedocumenteerd in de meeting notulen.
                    Klik hier voor een screenshot. Ook vroeg een projectgenoot continu beoordeling van zijn notulen, hier heb ik altijd eerlijk oordeel over gegeven.
                </Typography>
            </Grid>
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    <span style={{color: "#1b7662"}}>Samenwerken</span> ging... nogal lastig. Ik heb op technisch aspect niet echt het gevoel gehad dat ik veel op mijn projectgenoten kon rekenen. Wat er dus vaak gebeurde is dat zij een taak kregen,
                    maar eigenlijk niet zo goed wisten hoe deze uitgevoerd moest worden. Hierdoor kwam deze taak uiteindelijk in mijn handen terecht. Dit is ook te zien in het aantal commits per persoon (hierboven), en het aantal tickets dat
                    door mij is opgepakt.
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    Op de <Link href={"http://shambuwu.com:3000/communication/"}>communicatiepagina</Link> staan voorbeelden van hoe ik mijn <span style={{color: "#1b7662"}}>Boodschappen overbracht</span>. Dit ging voornamelijk via Discord en WhatsApp,
                    maar we hadden ook vaak "offline" meetings op school, waar we het project bespraken. Op de <Link href={"http://shambuwu.com:3000/scrum/"}>Scrumpagina</Link> staat ook een mooi voorbeeld hoe ik ervoor heb gezorgd dat we naar Jira zijn
                    overgestapt.
                </Typography>
            </Grid>
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    Het <span style={{color: "#1b7662"}}>Plannen</span> van taken ging voornamelijk via Jira. Elke twee weken hadden wij een Sprintplanning. Dit hield in dat wij met de hele groep gingen zitten, taken gingen bedenken en een tijdsduur
                    aan deze taken gingen verbinden. Dit hebben wij gedaan met Scrumpoker. Voor meer details zie de <Link href={"http://shambuwu.com:3000/scrum/"}>Scrumpagina</Link>.
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    Mijn <span style={{color: "#1b7662"}}>Aanpassingsvermogen</span> was vooral op technisch aspect merkbaar. We hebben bijvoorbeeld meerdere projectvisies gehad. De eerste versie van de Powerchainger API is iets van drie revisies ondergaan.
                    Eerst was het een Django applicatie, vervolgens een Next.js applicatie (Oeps foutje van mij!) en de versie die nu op de main branch staat is een Express.js applicatie. Dit komt omdat we in het begin niet zo zeker waren van wat de applicatie
                    nou daadwerkelijk moest gaan doen, waardoor we constant verschillende ideeën uitvoerden. Ik vond dit echter niet erg, ik vond het wel leuk om constant nieuwe dingen proberen werkend te krijgen in de Docker containers.
                </Typography>
            </Grid>
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    <span style={{color: "#1b7662"}}>Pro-actief handelen</span> heb ik vooral bewezen met de <Link href={"http://shambuwu.com:3000/react/"}>front-end applicatie</Link>. Toen we nieuwe functionaliteit toegevoegd hadden aan de Data API, bestuurden
                    we deze met cURL requests. Ik wist dat dit een bottleneck zou gaan vormen tijdens de ontwikkeling, dus besloot ik pro-actief een front-end applicatie te bouwen voor deze functionaliteit.
                </Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={2} />
            <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                    Mijn <span style={{color: "#1b7662"}}>Reflectie</span> staat kort en bondig beschreven bij "Wat heb ik gedaan?" op deze pagina.
                </Typography>
            </Grid>
        </Grid>

    )
}
