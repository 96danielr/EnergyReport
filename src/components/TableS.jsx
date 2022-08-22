import React from 'react';
import Table from 'react-bootstrap/Table';


const TableS = () => {
    return (
        <div>
             <Table striped bordered hover variant="primary">
      <thead>
        <tr>
          <th>Tipo Energía</th>
          <th>Estandar Dia</th>
          <th>Estandar Mes</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Consumo Eléctrico</td>
          <td>293.995 kw/h</td>
          <td>8.819.950 kw/h</td>
          
        </tr>
        <tr>
          <td>Consumo Gas</td>
          <td>41.504 m3</td>
          <td>1.245.120 m3</td>
         
        </tr>
        <tr>
          <td>Consumo Vapor</td>
          <td>233.000 kg</td>
          <td>6.990.000 kg</td>
          
        </tr>
      </tbody>
    </Table>
     </div>
        
        
    );
};

export default TableS;