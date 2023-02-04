import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Grid,
    Paper,
    Card,
    CardMedia,
    CardContent, CardActions, Button
} from "@mui/material";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import Carousel from "react-multi-carousel";
import {motion} from "framer-motion";
interface Props {

}

export default function Projects(props: Props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Grid container spacing={3} width={"90%"} marginX={"auto"}>
            <Grid item xs={5}>
                <Box>
                    <Typography color={"secondary"} gutterBottom variant={"h6"}>
                        Hieronder staan de links naar alle Github repositories. Deze staan wel op privé.
                    </Typography>
                    <List sx={{}}>
                        <ListItem disablePadding component={motion.div} whileHover={{ scale: 1.1 }} transition={{ type: "spring", bounce: 0.5 }}>
                            <ListItemButton href={"https://github.com/Shambuwu/powerchainger"}>
                                <GitHubIcon />
                                <ListItemText primary={"Deprecated Powerchainger API (Deze wordt niet meer gebruikt)"}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding component={motion.div} whileHover={{ scale: 1.1 }} transition={{ type: "spring", bounce: 0.5 }}>
                            <ListItemButton href={"https://github.com/Shambuwu/powerchainger-alg-server"}>
                                <GitHubIcon />
                                <ListItemText primary={"Powerchainger Data API"}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding component={motion.div} whileHover={{ scale: 1.1 }} transition={{ type: "spring", bounce: 0.5 }}>
                            <ListItemButton href={"https://github.com/Shambuwu/powerchainger-alg-frontend"}>
                                <GitHubIcon />
                                <ListItemText primary={"Powerchainger Front-end"}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding component={motion.div} whileHover={{ scale: 1.1 }} transition={{ type: "spring", bounce: 0.5 }}>
                            <ListItemButton href={"https://github.com/Shambuwu/powerchainger-alg-service"}>
                                <GitHubIcon />
                                <ListItemText primary={"Powerchainger Algorithm Service"}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding component={motion.div} whileHover={{ scale: 1.1 }} transition={{ type: "spring", bounce: 0.5 }}>
                            <ListItemButton href={"https://github.com/Shambuwu/openict-portfolio"}>
                                <GitHubIcon />
                                <ListItemText primary={"De source code van dit portfolio"}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={7}>
                <Typography color={"secondary"} gutterBottom variant={"h6"}>
                    Coole statistieken! :^O
                </Typography>
                <Carousel
                    arrows={false}
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    infinite={true}
                >
                    <>
                        <GitHubIcon />
                        <Typography color={"inherit"}>
                            Deprecated Powerchainger API commits
                        </Typography>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1069216640467746876/image.png"}
                            sx={{objectFit: "contain", borderRadius: "20px", boxShadow: 3}}
                        >
                        </Box>
                    </>
                    <>
                        <GitHubIcon />
                        <Typography color={"inherit"}>
                            Powerchainger Data API commits
                        </Typography>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1069216708524515348/image.png"}
                            sx={{objectFit: "contain", borderRadius: "20px", boxShadow: 3}}
                        >
                        </Box>
                    </>
                    <>
                        <GitHubIcon />
                        <Typography color={"inherit"}>
                            Powerchainger Front-end app
                        </Typography>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1069216896093798400/image.png"}
                            sx={{objectFit: "contain", borderRadius: "20px", boxShadow: 3}}
                        >
                        </Box>
                    </>
                    <>
                        <GitHubIcon />
                        <Typography color={"inherit"}>
                            Powerchainger Algorithm Service
                        </Typography>
                        <Box
                            component={"img"}
                            src={"https://cdn.discordapp.com/attachments/759549587555352619/1069216970039373824/image.png"}
                            sx={{objectFit: "contain", borderRadius: "20px", boxShadow: 3}}
                        >
                        </Box>
                    </>
                </Carousel>
            </Grid>
        </Grid>
    )
}