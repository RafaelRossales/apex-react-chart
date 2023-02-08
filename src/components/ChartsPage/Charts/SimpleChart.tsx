import ReactApexChart from 'react-apexcharts'

interface ApexOptions{
    chart:Object,
    xaxis:Object,
    fill:Object
    series:any
}

export default function SimpleChart(){

    const chartData:ApexOptions ={
        chart:{
            type:"bar",
            id: "basic-bar",
            foreColor:"red"
        },
        fill:{
            type:"solid",
            colors: ['#1A73E8', '#B32824']
        },
        xaxis:{
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        series: [
            {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
}
    return <ReactApexChart 
    width="350" 
    options={chartData} 
    series={chartData.series} 
    />;
}
