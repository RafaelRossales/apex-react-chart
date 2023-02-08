import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import LineChart from "../Charts/LineChart"
import RealTimeChart from "../Charts/RealTime"
import SimpleChart from "../Charts/SimpleChart"


const useStyle = makeStyles({
    root:{
        position:"relative",
        width:"100vw",
        marginLeft:"20px",
        height:"90vh",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItens:"center",
        flexWrap:"wrap",
        gap:"10",
        overflow:"auto",
        padding:"10px",
        alginSelf:"flex-start"
    },

    circle:{
        width:"200px",
        height:"200px",
        backgroundColor:"red",
    }
})
export default function ChartsSection(){

    const classes = useStyle()

    return(
        <div className={classes.root}>
            {/* <Box sx={{ width:"350px", height:"220px", m:"10px"}}>
                <LineChart/>
            </Box>
            <Box sx={{ width:"350px", height:"220px", m:"10px"}}>
                <LineChart/>
            </Box>
            <Box sx={{ width:"350px", height:"220px", m:"10px"}}>
                <LineChart/>
            </Box>
            <Box sx={{ width:"350px", height:"220px" , m:"10px"}}>
                <SimpleChart/>
            </Box> 
            <Box sx={{ width:"350px", height:"220px" , m:"10px"}}>
                <SimpleChart/>
            </Box> */}
            {/* <Box sx={{ width:"350px", height:"220px" , m:"10px"}}> */}
                <RealTimeChart/>
            {/* </Box>   */}
        </div>
    )
}