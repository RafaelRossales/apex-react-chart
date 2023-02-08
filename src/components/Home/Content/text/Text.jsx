import { Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { borders } from '@mui/system';

const useStyles = makeStyles({

    upperLine:{
        borderTop:"1px solid",
    },
    lowerLiner:{
        borderBottom:"1px solid",
    }
    
})

export default function Text(){

    const classes = useStyles();

    return(
    <Stack 
    sx={{ width:"100vw",mt:"55px" }} 
    direction="column" 
    spacing={3} 
    >
        <Typography 
        variant="p" 
        component="h2" sx={{ 
            fontSize:'28px', 
            textAlign:"center", 
            fontWeight:"600",
            color:"#28007D"
        }}
        >
            WELCOME TO  THE TELEMETRY SYSTEM WHERE YOU CAN FIND  
        </Typography>

            <Box 
            sx={{
                width:"75vw", 
                alignSelf:"center", 
                display:"flex", 
                flexWrap:"wrap"
                }}>
                <Typography 
                varant="p" 
                sx={{  
                    textAlign:"center" , 
                    fontSize:"20px" , 
                    fontWeight:"600", 
                    color:"#C7C7C7"}}
                    >
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </Typography>

                {/* <div className={classes.upperLine}></div>
                        <Typography sx={{  textAlign:"center" }}>
                                Services
                        </Typography>
                <div className={classes.lowerLiner}></div> */}
            </Box>
    </Stack>
    )
}