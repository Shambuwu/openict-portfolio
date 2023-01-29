import {Divider} from "@mui/material";

interface Props {
    text: string
}
export default function CustomDivider(props: Props) {
    return (
        <Divider sx={{marginTop: "50px", marginBottom: "50px"}}>{props.text}</Divider>
    )
}