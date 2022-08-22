import "./App.css";

import LineColumn from "./components/LineColumn";
import LineColumn2 from "./components/LineColumn2";
import RadialBar from "./components/RadialBar";
import StackedColumn from "./components/StackedColumn";
import Donut from "./components/Donut";
import TableS from "./components/TableS";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Notes from "./components/Notes";
import Porcent from "./components/Porcent";
import Porcent2 from "./Porcent2";
import AreaG from "./components/AreaG";
import Line from "./components/Line";



function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <div>
        <div className="row">
          <div className="lineal">
            <div className="Tittle-lineal">
            <h1><b>Histórico Consumos Energéticos</b></h1>
            </div>
            <div className="container">
            <Line />
            </div>
            <div className="container">
            <Notes />
            </div>
           
            <div className="container">
            <LineColumn />
            </div>
            <div className="container">
            <LineColumn2 />
            </div>
            <div className="container">
            <StackedColumn />
            </div>
            
          </div>
          <div className="circular">
            <div className="Title_2">
            <h2><b>Consumos Estándar</b></h2>
            </div>
           
              
              
            <div className="table-container">
            <TableS/>

            </div>
            
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
