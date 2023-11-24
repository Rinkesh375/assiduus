import React from 'react';
import  "../styles/style.css";

const Chart4 = () => {
  return (
    <div className="container-box-second-child">
    <div className="chart-box-heading">
      <div>
        <h3>Account watchlist</h3>
      </div>
      <div></div>
    </div>
    <hr />

    <div className="chart-box-bottom">
      <div style={{ textAlign: "left",fontWeight:"bold" }}>
        <p>Account</p>
        <h4>Sales</h4>
        <h4>Advertising</h4>
        <h4>Inventory</h4>
        <h4>Entertainment</h4>

      </div>
      <div className="chart-box-fourth">
        <div style={{ textAlign: "left",fontWeight:"bold" }}>
          <p>This Month</p>
          <h4>1,194.58</h4>
          <h4>6,894.02</h4>
          <h4>4,692.07</h4>
          <h4>4,652.10</h4>

        </div>
        <div style={{ textAlign: "left" ,fontWeight:"bold"}}>
          <p>YTD</p>
          <h4>11,468.02</h4>
          <h4>9,271.36</h4>
          <h4>9,768.09</h4>
          <h4>2,529.90</h4>
    
        </div>
      </div>
    </div>
  </div>
  );
}

export default Chart4;
