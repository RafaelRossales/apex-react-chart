import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import Footer from "../General/Footer/Footer";
import Nav from "../General/NavBar/Nav";
import LineChart from "./Charts/LineChart";
import SimpleChart from "./Charts/SimpleChart";
import ChartsSection from "./ChartsSection";
import NotificationLabel from "./NotificationLabel/NotificationLabel";


const useStyles = makeStyles({
    root:{
        // width:"100vw",
        height:"auto",
        // display:"flex"
    },
    teste:{
        marginLeft:"50%"
    }
})


export default function ChartsPage(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Nav/>
                <Stack direction="column" spacing={2}>
                    <NotificationLabel/>
                    <div className={classes.teste}>
                        <ChartsSection/>
                    </div>
                </Stack>
            <Footer/>
        </div>
    )
}