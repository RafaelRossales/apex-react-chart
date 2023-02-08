
import { makeStyles } from '@mui/styles';
import { Container, Stack } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Card from './card/Card';
import Text from './text/Text';
import { green } from '@mui/material/colors';
import CardSection from './CardSection/CardSection';

const useStyles = makeStyles({
    root:{
        // display:"flex",
        width:"100vw",
        height:"100vh",
        backgroundColor:"yellow"
    },
    // text_section:{
    //     backgroundColor:"purple"
    // }
})



export default function Content(){

    const classes = useStyles();

    return(
        <div>
            <Stack direction="column" spacing={8}>
                <Text/>
                <CardSection/>
            </Stack>
        </div>
    )
}