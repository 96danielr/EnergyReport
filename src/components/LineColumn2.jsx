import React from 'react';
import ReactApexChart from "react-apexcharts"

const LineColumn2 = () => {
    const series = [{
        name: 'Consumo Gas',
        type: 'column',
        data: [1246346 , 1161541,1145564
            ,1255070
            ,1216034
            ,1281299
            ,1179088

          ]
      }, {
        name: 'Costo Consumo Gas',
        type: 'line',
        data: [1166689972


            ,1049026860

            ,920125590

            ,960927890

            ,960915000

            ,1004885700

            ,1004885700

    
          ]
      }]
      const options = {
        
        colors: ['#FF9800', '#E91E63'],
          
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Gas vs Costo'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
       
        xaxis: {
            categories: ['Dic','Ene','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        yaxis: [{
          title: {
            text: 'Consumo gas(m3)',
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Costo Gas (COP)'
          }
        }]
      }
    
    return (
        <div>
             <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineColumn2;