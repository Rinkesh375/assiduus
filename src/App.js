import "./styles/style.css"
import Header from './components/Header';
import SideBar from './components/SideBar';
import Chart1 from './components/Chart1';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import Chart4 from './components/Chart4';
import { useState } from "react";


function App() {
 
  return (
    <>
     <Header /> 
   <div className='main_box'>
   <div> <SideBar/></div>
    <div className="chart_boxes">
    <Chart1/>
    <Chart2 />
    <Chart3/>
    <Chart4/>
    </div>
   </div>
    </>
  );
}

export default App;
