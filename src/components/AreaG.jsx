import React from 'react';
import ReactApexChart from "react-apexcharts"


const AreaG = () => {

    const series= [{
      name: 'Costo Energia Electrica',
      data: [2945448716

        , 2910390577
        ,2933165906
        ,3428352977
        ,3300904104
        ,3687195283
        ,3432927100

      ]
      }, {
        name: 'Costo Gas',
        data: [1166689972,1049026860,920125590,960927890,960915000,1004885700,1031437030






        ]
      }]
     const options= {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ['01/01/2022', '02/01/2022','03/01/2022','04/01/2022','05/01/2022','06/01/2022','07/01/2022'
        ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
    return (
        <div>
             <ReactApexChart options={options} series={series} type="area" height={350} /> 
        </div>
    );
};

export default AreaG;