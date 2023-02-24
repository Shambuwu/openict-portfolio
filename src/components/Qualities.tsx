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
                            Documentatie over het vaststellen van kwaliteitscriteria is hier te vinden, maar ook op de <Link href={"/scrum"}>Scrumpagina</Link>.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/creative_work"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Creatief Werken</h3>
                            De beroepsproducten waar de student aan heeft gewerkt waren constant aan het veranderen. Hierdoor kwamen verschillende problemen omhoog. Op deze pagina wordt beschreven hoe deze problemen getackled werden.
                            De sectie geleerde/gebruikte vaardigheden beschrijft ook enkele manieren waarop de student creatief heeft gewerkt.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/critical_judgement"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Kritisch Oordelen</h3>
                            Kritisch oordelen verwijst naar het proces van zorgvuldige reflectie en evaluatie van informatie om een weloverwogen en onderbouwd standpunt te vormen.
                            Het vereist een actieve en systematische aanpak om de geldigheid en betrouwbaarheid van bewijs en argumenten te onderzoeken,
                            evenals een kritische houding om eventuele vooroordelen en onjuiste aannames te vermijden.
                            Kritisch oordelen impliceert dus het vermogen om logisch en analytisch te denken en te redeneren, en om onafhankelijk te zijn in het evalueren van informatie.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/cooperation"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Samenwerken</h3>
                            Samenwerking binnen een projectgroep is van essentieel belang voor het succes van het project.
                            Het stelt de leden in staat om hun individuele sterke punten en vaardigheden te combineren en te benutten om gezamenlijk het doel van het project te bereiken.
                            Bovendien kan samenwerking ervoor zorgen dat er meer creatieve oplossingen worden gegenereerd door de verschillende perspectieven en ideeën van de groepsleden samen te brengen.
                            Door effectief te communiceren en te coördineren, kunnen de leden ook conflicten oplossen en vertragingen in het project voorkomen.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/message_delivery"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Boodschap Overbrengen</h3>
                            Het vermogen om een boodschap effectief over te brengen is een belangrijke kwaliteit, zowel in professionele als persoonlijke omgevingen.
                            Het impliceert het vermogen om informatie duidelijk en beknopt te formuleren, rekening houdend met het publiek en hun achtergrond en belangen.
                            Het gaat ook om het selecteren van de juiste communicatiemethode om de boodschap het best over te brengen, of het nu gaat om mondelinge communicatie, schrijven, visuals, of een combinatie van deze methoden.
                            Een goede boodschapoverdracht vereist ook actief luisteren om feedback te krijgen en eventuele misverstanden op te helderen.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/planning"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Plannen</h3>
                            Plannen is een belangrijke kwaliteit die verwijst naar het vermogen om vooruit te denken, doelen te stellen en acties te organiseren om die doelen te bereiken.
                            Een goede planner houdt rekening met de beschikbare middelen, de tijd en de vereiste stappen om het gewenste resultaat te bereiken.
                            Door een duidelijk plan te hebben, kan men de efficiëntie en effectiviteit van het werk maximaliseren, onnodige vertragingen en fouten vermijden, en de voortgang van het werk bijhouden.
                            Het is ook belangrijk om flexibel te blijven en aanpassingen te maken aan het plan indien nodig, bijvoorbeeld wanneer onverwachte gebeurtenissen optreden of nieuwe informatie beschikbaar komt.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"/adaptability"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Aanpassingsvermogen</h3>
                            Aanpassingsvermogen is een belangrijke kwaliteit die verwijst naar het vermogen om zich snel aan te passen aan veranderende omstandigheden en om flexibel te zijn in de aanpak van problemen.
                            Het omvat het vermogen om snel te leren en nieuwe informatie te integreren, om te reageren op onverwachte gebeurtenissen en om creatieve oplossingen te vinden voor uitdagende situaties.
                            Een persoon met een goed aanpassingsvermogen is in staat om zich snel aan te passen aan nieuwe situaties en om zich aan te passen aan verschillende mensen en omgevingen.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Link href={"proactive_handling"} style={{ textDecoration: 'none' }} color={"inherit"}>
                        <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                            <h3 style={{color: "#1b7662"}}>Pro-actief Handelen</h3>
                            Pro-actief handelen is een kwaliteit die aangeeft dat iemand vooruitdenkt en initiatief neemt om problemen op te lossen voordat ze zich voordoen.
                            Het is de vaardigheid om verantwoordelijkheid te nemen voor het identificeren van problemen en het vinden van oplossingen, zonder dat iemand daar expliciet om vraagt.
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={2} />
                <Grid item xs={10} marginTop={"30px"} component={motion.div} whileHover={{ scale: 1.1 }}>
                    <Typography textAlign={"left"} width={"50%"} marginX={"auto"}>
                        <h3 style={{color: "#1b7662"}}>Reflecteren</h3>
                        Achteraf had ik misschien meer leiderschap moeten tonen. Ik ben redelijk verlegen, dus ik vind het aanspreken van projectgenoten moeilijk.
                        Hier moet ik wel aan gaan werken, gezien ik waarschijnlijk mijn hele leven langs in teamverband zal gaan werken. Verder ben ik
                        erg tevreden met de vaardigheden die ik heb geleerd en de kennis die ik heb opgedaan.
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
