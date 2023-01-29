import {useContext, useState} from "react";
import {Avatar, Box, Grid, Divider, Link} from "@mui/material";

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
                        sx={{boxShadow: 3, borderRadius: 2, marginTop: "35px", marginBottom: "40px"}}
                    />
                </Grid>
                <Grid item xs={5} sx={{textAlign: "left"}} zeroMinWidth>
                    <div>
                        <h4 style={{marginBottom: 0, color: "grayText"}}>Hallo, ik ben</h4>
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                                <h1 style={{marginTop: 0, marginBottom: 0}}>Levi Leuwol</h1>
                            </Grid>
                            <Avatar alt={"Levi Leuwol"} src={"https://cdn.discordapp.com/attachments/922546832951898175/1067794384151662633/FmVHQSzaUAIxluq.png"} />
                        </Grid>
                        <p style={{fontSize: "15px"}}>
                            Linux enthousiast (ik gebruik Arch btw), lijpe back-end engineer en zelfverklaarde "Dockergod".
                            Geïnteresseerd in Web Development, DevOps, vissen en <Link href={"https://www.youtube.com/watch?v=jxGfBVcH8JI"} color={"primary"}>metal!</Link>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}