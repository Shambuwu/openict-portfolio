import {Divider, Card, CardActions, CardContent, CardMedia, Button} from "@mui/material";
import {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typography from "@mui/material/Typography";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const cardTheme = {
    textAlign: "left", 
    width: "80%", 
    marginLeft: "auto", 
    marginRight: "auto",
    paddingTop: "20px",
    boxShadow: 3
}

interface Props {

}
export default function Skills(props: Props) {
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
                <Card sx={cardTheme}>
                    <CardMedia
                        component={"img"}
                        alt={"Docker Image"}
                        height={140}
                        image={"https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png?itok=zx0e-vcP"}
                        sx={{objectFit: "contain"}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Docker</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Docker wordt gebruikt om softwarepakketten in 'containers' uit te voeren.
                            Deze containers zijn geïsoleerd van elkaar en bevatten hun eigen applicaties,
                            tools, bibliotheken en configuratiebestanden. Ze kunnen met elkaar communiceren
                            via specifieke kanalen. Voor het ontwikkelen van Powerchainger services heb ik veel Docker gebruikt.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Hoe heb ik Docker gebruikt?
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={cardTheme}>
                    <CardMedia
                        component={"img"}
                        alt={"Javascript Image"}
                        height={140}
                        image={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"}
                        sx={{objectFit: "contain"}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Javascript</Typography>
                        <Typography variant="body2" color="text.secondary">
                            JavaScript is een populaire taal voor het maken van interactieve webpagina's en ontwikkelen van webapplicaties.
                            Het is één van de belangrijkste technologieën samen met HTML en CSS in het wereldwijde web.
                            Ik heb Javascript gebruikt tijdens de ontwikkeling van van een front-end applicatie die ervoor
                            zorgt dat gebruikers data kunnen versturen naar de Data API.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Wat heb ik met Javascript gedaan?
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={cardTheme}>
                    <CardMedia
                        component={"img"}
                        alt={"Python Image"}
                        height={140}
                        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"}
                        sx={{objectFit: "contain"}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Python</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Python is een programmeertaal die geïnterpreteerd, interactief en objectgeoriënteerd is.
                            Python is gemakkelijk te lezen. Het gebruikt vaak Engelse woorden terwijl andere talen leestekens gebruiken,
                            en heeft minder grammaticale constructies dan andere talen. Ik heb Python gebruikt bij onze projecten voor de Django applicaties
                            en de losse scripts die wij hebben gebruikt om data te collecteren.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Hoe ben ik beter geworden met Python?
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={cardTheme}>
                    <CardMedia
                        component={"img"}
                        alt={"React Image"}
                        height={140}
                        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}
                        sx={{objectFit: "contain"}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">React</Typography>
                        <Typography variant="body2" color="text.secondary">
                            React.js is een JavaScript framework ontwikkeld door Facebook,
                            Het is open-source en werkt met componenten.
                            Hierdoor kun je een bepaald onderdeel van de interface hergebruiken in meerdere delen van de applicatie,
                            waardoor de ontwikkeling efficiënter verloopt. (Deze pagina is ook gemaakt met React!)
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Affaire met een front-end framework?
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={cardTheme}>
                    <CardMedia
                        component={"img"}
                        alt={"Django Image"}
                        height={140}
                        image={"https://se.ewi.tudelft.nl/desosa2019/chapters/django/images/django/logo-transparent.png"}
                        sx={{objectFit: "contain"}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Django</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Django is een Python web framework dat snelle ontwikkeling van veilige en onderhoudbare websites mogelijk maakt.
                            Ik heb Django gebruikt voor twee onderdelen: de Data API, hier wordt data naartoe verzonden, en de Algoritme service,
                            deze microservice wordt gebruikt door de Data API om data te verwerken en te classificeren.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Ik haat Python
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={cardTheme}>
                    <CardMedia
                        component={"img"}
                        alt={"Flutter Image"}
                        height={140}
                        image={"https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"}
                        sx={{objectFit: "contain"}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Flutter</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Flutter is een toolkit voor het ontwikkelen van user interfaces op verschillende mobiele besturingssystemen
                            als iOS en Android. Ik kan er niet heel veel over vertellen, gezien ik maar een maandje heb gewerkt met Flutter.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Een Flutter artefact?
                        </Button>
                    </CardActions>
                </Card>
            </Carousel>
            <div style={{marginTop: "20px"}}>
                {autoPlay ? (
                    <Button size="small" color="secondary" onClick={() => {setAutoPlay(false)}}>
                        Stop Autoplay
                    </Button>
                ):(
                    <Button size="small" color="secondary" onClick={() => {setAutoPlay(true)}}>
                        Start Autoplay
                    </Button>
                )}
            </div>
        </>
    )
}