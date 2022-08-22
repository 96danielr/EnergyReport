
import React from 'react';
import ReactApexChart from "react-apexcharts"

const Line = () => {
         
    const series= [{
        name: 'Consumo Proyectado',
        type: 'line',
        data:  [ 9113845,9113845,8231860,9113845,8819850,9113845,8819850,9113845
    
          ]
      }, {
        name: 'Consumo Energía',
        type: 'line',
        data: [8716201
            , 8340083,8185156,9215887,8504211,9238394,8412743, 8358086 

          ]
      }]
    const options= {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
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
        categories: ['Dec','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
  
    return (
        <div>
            <ReactApexChart options={options} series={series} type="line" height={350} />

    
        </div>
    );
};

export default Line;