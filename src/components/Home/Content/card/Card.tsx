import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import React from "react";

interface ICard{
    title:string
    text:string
    icon:React.ReactNode
}

export default function Card({title,text,icon}:ICard){

    return(
        <Box sx={{ 
            width:"270px",
            height:"210px", 
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:"4px",
        }}>
            <Box sx={{ 
                width:"60px",
                height:"60px",
                backgroundColor:"#342B8E",
                borderRadius:"50%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignContent:"center"
            }}>
                {icon}
            </Box>
            <Typography sx={{  textAlign:"center", mt:"6px", color:"#6C6C6C", fontWeight:"600"}}>
                {title}
            </Typography>
            <Typography sx={{  textAlign:"justify", fontSize:"12px", width:"auto", p:"18px", color:"#6C6C6C"}}>
                {text}
            </Typography>
        </Box>
    )
}