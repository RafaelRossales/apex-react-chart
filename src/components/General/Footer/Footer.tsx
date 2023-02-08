import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root:{
        bottom:"0px",
        position:"absolute",
        left:"0",
        right:"0",
        width:"auto",
        height:"8%",
        backgroundColor:"#342B8E",
        color:"white",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }
})

export default function Footer(){

    const classes = useStyles();

    return(
        <footer className={classes.root}></footer>
    )
}