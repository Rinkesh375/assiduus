import React from 'react';
import BarChart from './BarChart';
import  "../styles/style.css";

const Chart3 = () => {
    const randomChart = (n)=>{
        const array  = []
    for (let i = 0; i < n; i++) {
        const randomValue = Math.floor(Math.random() * 10) * 10 + 10;
        array.push(randomValue);
      }
      return array
    }
  return (
      <>
      <div className="container-box-second-child">
            <div className="chart-box-heading">
              <div>
                <h3>Total cash flow</h3>
              </div>
              <div className="chart-box-fourth">
                <div className="chart-box-fourth">
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      backgroundColor: "green",
                    }}
                  ></div>
                  <span>In</span>
                </div>
                <div className="chart-box-fourth">
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      backgroundColor: "#21cd1e",
                    }}
                  ></div>
                  <span>Out</span>
                </div>
              </div>
            </div>
            <hr />
            <div className='chartLine'>
              <BarChart data={randomChart(6)} />
            </div>
            <div className="chart-box-bottom">
              <span>August</span>
              <span>September</span>
              <span>Octomber</span>
              <span>November</span>
              <span>December</span>
              <span>January</span>
            </div>
          </div>
      
      
      
      </>
  );
}

export default Chart3;
