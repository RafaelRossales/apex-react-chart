import ReactApexChart from 'react-apexcharts'

interface ApexOptions{
    chart:Object,
    xaxis:Object,
    series:any
    dataLabels:Object
    stroke:Object,
    title:Object,
    grid:object
}

export default function LineChart(){

    const chartData:ApexOptions ={
        chart:{
            type:"line",
            zoom:{
                enabled:false
            },
        },
        dataLabels:{
            enable:false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
        row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        series:[{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }]
    }
    return <ReactApexChart 
                width="350"
                options={chartData} 
                series={chartData.series} 
                />;
}