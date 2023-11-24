import React,{useEffect, useState} from 'react';
import BarChart from './BarChart';

import { memo } from 'react';
import PopUp from './PopUp';
import  "../styles/style.css";


const Chart2 = memo((randomValue) => {
    const [chart2Data,setChart2Data] = useState([])
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    function randomChart  (n){
        const array  = []
    for (let i = 0; i < n; i++) {
        const randomValue = Math.floor(Math.random() * 10) * 10 + 10;
        array.push(randomValue);
      }
      setChart2Data([...array])
    }
   
    const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  useEffect(()=>{

    randomChart(6)
  },[randomValue])
    

    return (
        <>
            <div className="container-box-second-child box-2">
                <div className="chart-box-heading">
                    <div>
                        <h3>Invoices owed to you</h3>
                    </div>
                    <div>
                    <button onClick={handleOpenPopup}>New Sales Invoice</button>
                
                    </div>
                </div>
                <hr />
                <div className='chartLine'>
                    <BarChart data={chart2Data} />
                </div>
                <div className="chart-box-bottom">
                    <span>Older</span>
                    <span>Jan 01-08</span>
                    <span>Jan 09-16</span>
                    <span>Jan 17-24</span>
                    <span>Jan 25-31 </span>
                    <span>Future</span>
                </div>
            </div>



        </>
    );
})

export default Chart2;
