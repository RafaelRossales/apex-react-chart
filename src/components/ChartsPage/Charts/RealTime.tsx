import React, { useEffect, useState } from 'react';
import ReactApexCharts from 'react-apexcharts';
import  ApexOptions from 'react-apexcharts';
import ReactApexChartProps from 'react-apexcharts';

interface ChartData {
  x: number;
  y: number;
}

interface ChartOptions {
  chart: {
    type: string;
    animations: {
      enabled: boolean;
      easing: string;
      dynamicAnimation: {
        speed: number;
      };
    };
  };
  xaxis: {
    type: 'datetime',
  };
  series: [
    {
      name: string;
      data: ChartData[];
    },
  ];
}

const AnimatedChart: React.FC = () => {
  const [config, setConfig] = useState<any>({
    chart: {
      type:"line",
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    xaxis: {
      type: 'datetime',
    },
    series: [
      {
        name: 'series-1',
        data: [],
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setConfig((prevConfig:any) => {
        const newData: ChartData = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 100),
        };

        return {
          ...prevConfig,
          series: [
            {
              ...prevConfig.series[0],
              data: [...prevConfig.series[0].data, newData],
            },
          ],
        };
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="chart">
      <ReactApexCharts options={config} series={config.series} type="line" height={350} width={400}/>
    </div>
  );
};

export default AnimatedChart;