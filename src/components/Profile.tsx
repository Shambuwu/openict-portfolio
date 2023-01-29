import {useContext, useState} from "react";
import {Avatar, Box, Grid, Divider, Link} from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {

}

export default function Profile(props: Props) {
    const [loaded, setLoaded] = useState(true);

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={6} zeroMinWidth>
                    <Box
                        component={"img"}
                        src={"https://cdn.discordapp.com/attachments/759549587555352619/1069076270027120700/image.png"}
                        sx={{boxShadow: 3, borderRadius: 2, marginTop: "25px", marginBottom: "40px"}}
                    />
                </Grid>
                <Grid item xs={5} sx={{textAlign: "left"}} zeroMinWidth>
                    <div>
                        <h4 style={{marginBottom: 0, color: "grayText"}}>Hallo, ik ben</h4>
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                                <Typography variant={"h4"} sx={{marginTop: 0, marginBottom: 0}}>Levi Leuwol</Typography>
                            </Grid>
                            <Avatar alt={"Levi Leuwol"} src={"https://cdn.discordapp.com/attachments/922546832951898175/1067794384151662633/FmVHQSzaUAIxluq.png"} />
                        </Grid>
                        <Typography color={"inherit"} sx={{fontSize: "15px", marginTop: "10px"}}>
                            Linux enthousiast (ik gebruik Arch btw), lijpe back-end engineer en zelfverklaarde "Dockergod".
                            Geïnteresseerd in Web Development, DevOps, vissen en <Link href={"https://www.youtube.com/watch?v=jxGfBVcH8JI"} color={"primary"}>metal!</Link>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}