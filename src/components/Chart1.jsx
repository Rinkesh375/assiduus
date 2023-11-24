import React,{useState} from 'react';
import Chart from './Chart';
import  "../styles/style.css";

const Chart1 = () => {
    const [selectBox, setSelectBox]=useState("");
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
              <div className='chart_heading'>
                <h3>Checking account</h3>
              </div>
              <div>
                <select  value={selectBox}>
                {/* value={selectBox} onChange={(e)=>setSelectBox(e.target.value)} */}
                  <option value="manage">Manage</option>
                  <option value="date">Dates</option>
                </select>
                <select>
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                </select>
              </div>
            </div>
            <hr />
            <div>
              <Chart data={randomChart(10)} />
            </div>
            <div className="chart-box-bottom">
              <span>09</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
            </div>
            </div>
    
    </>
  );
}

export default Chart1;
