import {Divider, Card, CardActions, CardContent, CardMedia, Button} from "@mui/material";
import {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typography from "@mui/material/Typography";
import SkillCard from "./SkillCard";
import {motion} from "framer-motion";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

const skills = {
    "Python": {
        imageName: "Python Image",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        text: "Python is een programmeertaal die geïnterpreteerd, interactief en objectgeoriënteerd is.\
            Python is gemakkelijk te lezen. Het gebruikt vaak Engelse woorden terwijl andere talen\
            leestekens gebruiken,\
            en heeft minder grammaticale constructies dan andere talen. Ik heb Python gebruikt bij onze\
            projecten voor de Django applicaties\
            en de losse scripts die wij hebben gebruikt om data te collecteren.",
        buttonText: "Hoe ben ik beter geworden met Python?",
        title: "Python",
        href: "python"
    },
    "Docker": {
        imageName: "Docker Image",
        image: "https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png?itok=zx0e-vcP",
        text: "Docker wordt gebruikt om softwarepakketten in 'containers' uit te voeren.\
               Deze containers zijn geïsoleerd van elkaar en bevatten hun eigen applicaties,\
               tools, bibliotheken en configuratiebestanden. Ze kunnen met elkaar communiceren\
               via specifieke kanalen. Voor het ontwikkelen van Powerchainger services heb ik veel Docker\
               gebruikt.",
        buttonText: "\"Dockergod\" in actie?",
        title: "Docker",
        href: "docker"
    },
    "JavaScript": {
        imageName: "JavaScript Image",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        text: "JavaScript is een populaire taal voor het maken van interactieve webpagina's en ontwikkelen\
            van webapplicaties.\
            Het is één van de belangrijkste technologieën samen met HTML en CSS in het wereldwijde web.\
            Ik heb Javascript gebruikt tijdens de ontwikkeling van van een front-end applicatie die\
            ervoor zorgt dat gebruikers data kunnen versturen naar de Data API.",
        buttonText: "JS... Gek, maar wel cool",
        title: "JavaScript",
        href: "javascript"
    },
    "React": {
        imageName: "React Image",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        text: "React.js is een JavaScript framework ontwikkeld door Facebook,\
               Het is open-source en werkt met componenten.\
               Hierdoor kun je een bepaald onderdeel van de interface hergebruiken in meerdere delen van de\
               applicatie, waardoor de ontwikkeling efficiënter verloopt. (Deze pagina is ook gemaakt met React!)",
        buttonText: "Affaire met een front-end framework?",
        title: "React",
        href: "react"
    },
    "Django": {
        imageName: "Django Image",
        image: "https://se.ewi.tudelft.nl/desosa2019/chapters/django/images/django/logo-transparent.png",
        text: "Django is een Python web framework dat snelle ontwikkeling van veilige en onderhoudbare\
               websites mogelijk maakt. Ik heb Django gebruikt voor twee onderdelen: de Data API, hier wordt data naartoe verzonden,\
               en de Algoritme service, deze microservice wordt gebruikt door de Data API om data te verwerken en te classificeren.",
        buttonText: "Ik haat Python",
        title: "Django",
        href: "django"
    },
    "Flutter": {
        imageName: "Flutter Image",
        image: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
        text: "Flutter is een toolkit voor het ontwikkelen van user interfaces op verschillende mobiele besturingssystemen als iOS en Android.\
               Ik kan er niet heel veel over vertellen, gezien ik maar een maandje heb gewerkt met Flutter.",
        buttonText: "Een Flutter artefact?",
        title: "Flutter",
        href: "flutter"
    },
    "Scrum": {
        imageName: "Scrum Image",
        image: "https://www.scrum.org/themes/custom/scrumorg_v2/assets/images/logo-250.png",
        text: "Scrum is een Agile framework voor projectmanagement en productontwikkeling. Het richt zich op samenwerking, flexibiliteit en het steeds \
            verbeteren van de productieproces door het continu inspecteren en aanpassen ervan. Het bevat korte iteraties, \"Sprints\", waarin een multidisciplinair team samenwerkt om een werkende increment van het product te realiseren. \
            Wij hebben ook met de Scrummethode gewerkt. Zie voorbeelden op deze pagina",
        buttonText: "Lekker scrummen",
        title: "Scrum",
        href: "scrum"
    },
    "Communicatie": {
        imageName: "Communication Image",
        image: "https://cdn-icons-png.flaticon.com/512/3820/3820148.png",
        text: "Communicatie binnen ons projectgroepje ging voornamelijk via WhatsApp en Discord. Zo gebruikten wij Whatsapp was voor meer 'persoonlijkere' communicatie. Bijvoorbeeld of iemand onderweg was, ziek thuis bleef, etc. Discord \
               werd daarentegen meer gebruikt voor discussie rondom het project. Via Discord werden bestanden gedeeld en werd hulp geleverd wanneer iemand vastzat.",
        buttonText: "Kan geen tekst bedenken",
        title: "Communicatie",
        href: "communication"
    }
}

export default function Skills(props) {
    const [autoPlay, setAutoPlay] = useState(true);

    return (
        <>
            <Carousel
                responsive={responsive}
                autoPlay={autoPlay}
                autoPlaySpeed={4000}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                infinite={true}
            >
                {Object.values(skills).map(x => {
                    return (
                        <motion.div whileHover={{ scale: 0.95 }} transition={{ type: "spring", bounce: 0.5 }}>
                            <SkillCard imageName={x.imageName} image={x.image} text={x.text} buttonText={x.buttonText} title={x.title} href={x.href} />
                        </motion.div>
                    )
                })}
            </Carousel>
            <div style={{marginTop: "20px"}}>
                <motion.div
                    whileTap={{ scale: 0.8 }}
                >
                    {autoPlay ? (
                        <Button size="small" color="secondary" onClick={() => {
                            setAutoPlay(false)
                        }}>
                            Stop Autoplay
                        </Button>
                    ) : (
                        <Button size="small" color="secondary" onClick={() => {
                            setAutoPlay(true)
                        }}>
                            Start Autoplay
                        </Button>
                    )}
                </motion.div>
            </div>
        </>
    )
}