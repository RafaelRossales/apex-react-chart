import Content from "./Content/Content";
import Footer from "./../General/Footer/Footer";
import Nav from "../General/NavBar/Nav";
import './style.css'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root:{
        width:"100vw",
        height:"100vh",
    }
})


export default function Home(){

    const classes = useStyles();

    return(
        <div className={ classes.root }>
            <Nav/>
            <Content/>
            <Footer/>
        </div>
    )
}