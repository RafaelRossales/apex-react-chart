import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    primary_label:{
        diplay:"flex",
        flexDirection:"row",
        textAlignLast:"center",
        alignSelf:"center",
    },
    secondary_label:{
        width:"40vw",
        diplay:"flex",
        flexDirection:"row",
        alignSelf:"center",
        alignContent:"center",
        textAlignLast:"center"
    }
})

export default function NotificationLabel(){

    const classes = useStyles();

    return(
        <Box
        sx={{ 
            width:"100px",
            height:"30px",
            backgroundColor:"red",
            left:"0px",
            position:"absolute",
            marginTop:"70px",
            borderRadius:"0px 25px 25px 0px",
            display:"flex",
            flexDirection:"row",
            fontWeight:"400",
            color:"white",
            zIndex:1
        }}>
            <div className={classes.primary_label}>ONLINE</div>
            <div className={classes.secondary_label}>1</div>
    </Box>
    )
}