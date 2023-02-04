import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
    imageName: string,
    image: string,
    text: string,
    buttonText: string,
    title: string,
    href: string,
}

export default function SkillCard(props: Props) {
    const cardTheme = {
        textAlign: "left",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "20px",
        boxShadow: 3,
    }

    return (
        <Card sx={cardTheme}>
            <CardMedia
                component={"img"}
                alt={props.imageName}
                height={140}
                image={props.image}
                sx={{objectFit: "contain"}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{props.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" href={props.href}>
                    {props.buttonText}
                </Button>
            </CardActions>
        </Card>
    )
}