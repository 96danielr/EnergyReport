import React from 'react';
import ReactApexChart from "react-apexcharts"
const LineColumn = () => {

    const series = [{
        name: 'Consumo Electrico',
        type: 'column',
        data: [8716201
            , 8340083,8185156,9215887,8504211,9238394,8412743, 8358086 

          ]
      }, {
        name: 'Costo Energía',
        type: 'line',
        data: [2945448716

            , 2910390577
            ,2933165906
            ,3428352977
            ,3300904104
            ,3687195283
            ,3432927100,
            3607977811 

    
          ]
      }]
      const options = {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 2]
        },
        title: {
          text: 'consumo Eléctrico vs Costo'
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
            text: 'Consumo Electrico(KW/h)',
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Costo Energia Electrica (COP)'
          }
        }]
      }
    
    return (
        <div>
            <ReactApexChart options={options} series={series} type="line" height={350} />

    
        </div>
    );
};

export default LineColumn;