import React, { useState, useEffect } from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts'


interface ChartData {
    x: number;
    y: number;
  }
  
  interface ChartOptions {
    chart:any
    xaxis: any
    series: any,
    fill:any
  }
  

export default function RealTimeChart(){

    const [options, setOptions] = useState<ChartOptions>({
        chart: {
        type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000,
            },
          },
        },
        xaxis: {
          type: 'datetime'
        },
        fill:{
            opacity:0.3,
            type:'gradient',
            gradient:{
                shade:'dark',
                opacityFrom:0.7,
                opacityTo:0.3
            }
        },
        series: [{
          name: 'series-1',
          data: []
        }]
      });
      
      const [data, setData] = useState<ChartData[]>([]);

      useEffect(() => {
        const interval = setInterval(() => {
          setData(prevData => {
            const newData = [...prevData];
            newData.shift();
            newData.push({
              x: new Date().getTime(),
              y: Math.floor(Math.random() * (100 - 0 + 1)) + 0
            });
            return newData;
          });
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        setOptions({
          ...options,
          series: [
            {
              ...options.series[0],
              data,
            },
          ],
        });
      }, [data]);
      

      return <ReactApexChart 
                options={options} 
                series={[{ data }]} 
                type="line" 
                width={400}
                height={350} />
      
}