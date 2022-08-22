import React from 'react';
import ReactApexChart from "react-apexcharts"

const StackedColumn = () => {

    const series= [{
        name: 'Energia Eléctrica (kw)',
        data: [8716201
          , 8340083,8185156,9215887,8504211,9238394,8412743
        ]
      }, {
        name: 'Gas (m3)',
        data: [1246346
          , 1161541,1145564,1255070,1216034,1281299,1179088
        ]
      }, {
        name: 'vapor (kg)',
        data: [ 7027006,6695963,7765379, 6548072,7095836, 6500128 , 6459984  ]
      }]
      const options= {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        }, 
        title: {
          text: 'Consumos'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 8
          },
        },
        xaxis: {
          
          categories: ['Ene','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      }
    
    return (
        <div>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default StackedColumn;