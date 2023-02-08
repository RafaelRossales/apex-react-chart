import * as React from 'react';
import { makeStyles, ThemeProvider } from '@mui/styles';
import  AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar'
import Typography  from '@mui/material/Typography'
import  Button  from '@mui/material/Button' 
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';



export default function Nav() {

return (
        <AppBar position="static" style={{ backgroundColor:"#342B8E" }}>
            <Toolbar>
            <Typography variant="h6" component='div' sx={{ flexGrow:1 }}>
                Telemetria
            </Typography>
                <Stack direction="row" spacing={2} sx={{ mr:'20px' }}>
                    <Button color="inherit">Real Time</Button>
                    <Button color="inherit">History</Button>
                    <Button color="inherit">Devices</Button>
                    <Button color="inherit">Management</Button>
                </Stack>

                <Avatar 
                alt="Cindy Baker" 
                sx={{ 
                    bgcolor: green[700],
                    mr:'10px'
                }}>U</Avatar>
            </Toolbar>
        </AppBar>
    );
}
