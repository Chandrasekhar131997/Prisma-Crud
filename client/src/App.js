import React from 'react'
import {BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import EmployeeDashboard from './Component/Employee Dashboard';
import InsertDetails from './Component/InsertDetails';
import UpdateDetails from './Component/UpdateDetails';
// import ReadDetails from './Component/Read Details';
export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<EmployeeDashboard/>} />
        <Route path='/create/:id' element={<InsertDetails/>}/>
        {/* <Route path='/read/:id' element={<ReadDetails/>}/> */}
        <Route path='/update/:id' element={<UpdateDetails/>}/>
        <Route element ={Error} />
      </Routes>
      </Router>
    </>
  )
}



