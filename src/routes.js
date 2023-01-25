import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Callculator from "./kalkultor/ParentCal";
import DataKaryawan from "./datatabel/parentData";
import Login from "./formLogin/LoginForm";
import CustomersRedux from "./pages/customersRedux";
import AddCustRedux from "./pages/addCustomersRedux";
import EditCustRedux from "./pages/editCustRedux";
const Path = ()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>  
            <Route path="/calculator" element={<PrivateRoute> <Callculator/> </PrivateRoute> }/>
            <Route path="/tabel" element={<PrivateRoute> <DataKaryawan/> </PrivateRoute> }/>
            <Route path="/customers" element={<CustomersRedux/>}/>
            <Route path="/addcust" element={<AddCustRedux/>}/>
            <Route path="/editcust" element={<EditCustRedux/>}/>
        </Routes>
    </BrowserRouter>
    )
}

const PrivateRoute = (props)=>{
    const token =localStorage.getItem('token')
    if (!token)
        return <Navigate to='/login'/>
        return props.children
}

export default Path