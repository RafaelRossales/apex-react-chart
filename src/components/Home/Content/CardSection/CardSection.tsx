import { makeStyles } from "@mui/styles";
import Card from "../card/Card";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SourceIcon from '@mui/icons-material/Source';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import GroupsIcon from '@mui/icons-material/Groups';


const useStyles = makeStyles({
    root:{
        width:"100vw",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    }
})

export default function CardSection(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Card 
                title="Real Time" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim fringilla ex nec dapibus. Nulla maximus neque est, vel tristique lacus sagittis in. " 
                icon={<TrendingUpIcon sx={{ alignSelf:"center", color:"white", fontSize:40}}/>}
            />

            <Card 
                title="History" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim fringilla ex nec dapibus. Nulla maximus neque est, vel tristique lacus sagittis in. " 
                icon={<SourceIcon sx={{ alignSelf:"center", color:"white", fontSize:40}} />}
            />

            <Card 
                title="Devices" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim fringilla ex nec dapibus. Nulla maximus neque est, vel tristique lacus sagittis in. " 
                icon={<SpeakerPhoneIcon sx={{ alignSelf:"center", color:"white", fontSize:40}}/>}
            />

            <Card 
                title="Management" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim fringilla ex nec dapibus. Nulla maximus neque est, vel tristique lacus sagittis in. " 
                icon={<GroupsIcon sx={{ alignSelf:"center", color:"white", fontSize:40}}/>}
            />
        </div>
    )
}