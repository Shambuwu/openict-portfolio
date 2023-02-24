import Typography from "@mui/material/Typography";
import {Grid, Link} from "@mui/material";
import {motion} from "framer-motion";

export default function Qualities() {
    return (
        <>
            <h3 style={{color: "#1b7662"}}>Klik op de criteria voor meer informatie.</h3>
            <Grid container spacing={1}>
                    <Grid item xs={10} component={motion.div} whileHover={{ scale: 1.1 }}>
                        <Link href={"/knowledge_development"} style={{ textDecoration: 'none' }} color={"inherit"}>
                            <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                                <h3 style={{color: "#1b7662"}}>Juiste Kennis Ontwikkelen</h3>
                                Als backend developer binnen een keuzesemester ICT heeft de student altijd geprobeerd om zijn kennis voortdurend bij te spijkeren en te verbeteren. Om dit te bereiken, heeft de student zichzelf bekend gemaakt met verschillende technologieën en frameworks, zoals Python, Django, JS en React.
                            </Typography>
                        </Link>
                    </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/quality_product"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Kwalitatief Product Ontwikkelen</h3>
                            Er zijn meerdere beroepsproducten gerealiseerd voor het Powerchainger project. De student heeft voornamelijk gewerkt aan de "algorithm server". Deze is te vinden onder de sectie, Repositories.
                            Documentatie over het vaststellen van kwaliteitscriteria is hier te vinden, maar ook op de <Link href={"http://shambuwu.com:3000/scrum"}>Scrumpagina</Link>.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/creative_work"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Creatief Werken</h3>
                            <span style={{color: "#1b7662"}}>Creatief werken</span>, dit criterium heb ik op verschillende manieren bewezen. Refereer naar "Wat heb ik geleerd?". Ik laat zien hoe ik verschillende programmeertalen, frameworks, tools, etc, gebruik tijdens
                            de ontwikkeling van het project.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/critical_judgement"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Kritisch Oordelen</h3>
                            Ik heb altijd geprobeerd <span style={{color: "#1b7662"}}>Kritisch te oordelen</span>. Zo herinner ik mij een keer dat ik aangaf dat mijn projectgenoten niet genoeg deden voor het project. Dit staat ook gedocumenteerd in de meeting notulen.
                            Klik hier voor een screenshot. Ook vroeg een projectgenoot continu beoordeling van zijn notulen, hier heb ik altijd eerlijk oordeel over gegeven.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/cooperation"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Samenwerken</h3>
                            <span style={{color: "#1b7662"}}>Samenwerken</span> ging... nogal lastig. Ik heb op technisch aspect niet echt het gevoel gehad dat ik veel op mijn projectgenoten kon rekenen. Wat er dus vaak gebeurde is dat zij een taak kregen,
                            maar eigenlijk niet zo goed wisten hoe deze uitgevoerd moest worden. Hierdoor kwam deze taak uiteindelijk in mijn handen terecht. Dit is ook te zien in het aantal commits per persoon (hierboven), en het aantal tickets dat
                            door mij is opgepakt.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/message_delivery"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Boodschap Overbrengen</h3>
                            Op de <Link href={"http://shambuwu.com:3000/communication/"}>communicatiepagina</Link> staan voorbeelden van hoe ik mijn <span style={{color: "#1b7662"}}>Boodschappen overbracht</span>. Dit ging voornamelijk via Discord en WhatsApp,
                            maar we hadden ook vaak "offline" meetings op school, waar we het project bespraken. Op de <Link href={"http://shambuwu.com:3000/scrum/"}>Scrumpagina</Link> staat ook een mooi voorbeeld hoe ik ervoor heb gezorgd dat we naar Jira zijn
                            overgestapt.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/planning"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Plannen</h3>
                            Het <span style={{color: "#1b7662"}}>Plannen</span> van taken ging voornamelijk via Jira. Elke twee weken hadden wij een Sprintplanning. Dit hield in dat wij met de hele groep gingen zitten, taken gingen bedenken en een tijdsduur
                            aan deze taken gingen verbinden. Dit hebben wij gedaan met Scrumpoker. Voor meer details zie de <Link href={"http://shambuwu.com:3000/scrum/"}>Scrumpagina</Link>.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/adaptability"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Aanpassingsvermogen</h3>
                            Mijn <span style={{color: "#1b7662"}}>Aanpassingsvermogen</span> was vooral op technisch aspect merkbaar. We hebben bijvoorbeeld meerdere projectvisies gehad. De eerste versie van de Powerchainger API is iets van drie revisies ondergaan.
                            Eerst was het een Django applicatie, vervolgens een Next.js applicatie (Oeps foutje van mij!) en de versie die nu op de main branch staat is een Express.js applicatie. Dit komt omdat we in het begin niet zo zeker waren van wat de applicatie
                            nou daadwerkelijk moest gaan doen, waardoor we constant verschillende ideeën uitvoerden. Ik vond dit echter niet erg, ik vond het wel leuk om constant nieuwe dingen proberen werkend te krijgen in de Docker containers.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"proactive_acting"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Pro-actief Handelen</h3>
                            <span style={{color: "#1b7662"}}>Pro-actief handelen</span> heb ik vooral bewezen met de <Link href={"http://shambuwu.com:3000/react/"}>front-end applicatie</Link>. Toen we nieuwe functionaliteit toegevoegd hadden aan de Data API, bestuurden
                            we deze met cURL requests. Ik wist dat dit een bottleneck zou gaan vormen tijdens de ontwikkeling, dus besloot ik pro-actief een front-end applicatie te bouwen voor deze functionaliteit.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/reflection"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Reflecteren</h3>
                            Mijn <span style={{color: "#1b7662"}}>Reflectie</span> staat kort en bondig beschreven bij "Wat heb ik gedaan?" op deze pagina.
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}
