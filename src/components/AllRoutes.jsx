import React from 'react';
import {Routes,Route} from "react-router-dom"
import App from '../App';
const AllRoutes = () => {
  return (
     <Routes>
     <Route path="/" element={<App/>}/>
     <Route path="/Accounts" element={<App/>}/>
     <Route path="/Payroll" element={<App/>}/>
     <Route path="/Reports" element={<App/>}/>
     <Route path="/Advisor" element={<App/>}/>
     <Route path="/Contacts" element={<App/>}/>

     </Routes>
  );
}

export default AllRoutes;
