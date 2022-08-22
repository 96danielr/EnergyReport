import React from 'react';
import Table from 'react-bootstrap/Table';

const Notes = () => {
    return (
       
         <div>
             <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Mes</th>
          <th>Consumo</th>
          <th>Delta Estandar</th>
          <th>Observación</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Diciembre</td>
          <td>8.716.210 kw</td>
          <td>-405.112 kw</td>
          <td>2 dias de parada de Fin de año</td>
        </tr>
        <tr>
          <td>Enero</td>
          <td>8.185.156 kw</td>
          <td>-928.134 kw</td>
          <td>3.3 dias de parada de Fin de año</td>
        </tr>
        <tr>
          <td>Marzo</td>
          <td>9.215.857 kw</td>
          <td>+108.000 kw </td>
          <td>Alta producción de Blancos MP7</td>
        </tr>
        <tr>
          <td>Abril</td>
          <td>8.504.114</td>
          <td>-315.232 kw</td>
          <td>paradas MP7 y MP6 Mtto</td>
        </tr>
        <tr>
          <td>Junio</td>
          <td>8.412.274</td>
          <td>-414.221 kw</td>
          <td>paradas MP7 y MP6 Mtto</td>
        </tr>
        <tr>
          <td>Julio</td>
          <td>8.350.836</td>
          <td>-760.432 kw</td>
          <td>Proyecto headBox MP6</td>
        </tr>
      </tbody>
    </Table>

            
        </div>
    );
};

export default Notes;