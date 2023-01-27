import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getCustomers, deleteCustomers } from '../Redux/Action/reducerAction';

const CustomersRedux = () =>{
    let navigate = useNavigate()

    let customers = useSelector(state => state.customersReducers.cust);
    console.log(customers)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCustomers());
    },[dispatch]);

    const editdata = (id)=>{
        navigate('/editcust', {state:{id}})
    }

    const deletedata = (id)=>{
        dispatch(deleteCustomers(id))
    }

    return(
        <main id="main" class="main">
        <div className='container'>
            <a href="/addcust" class="btn btn-primary">tambah</a>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">custId</th>
                    <th scope="col">custName</th>
                    <th scope="col">custCity</th>
                    <th scope="col">edit</th>
                    <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    customers && customers.map((customers, i)=>{
                    return(
                        <tr>
                            <td>{i+1}</td>
                            <td>{customers.custId}</td>
                            <td>{customers.custName}</td>
                            <td>{customers.custCity}</td>
                            <td><button class="btn btn-warning"  onClick={()=>editdata(customers.custId)}>edit</button></td>
                            <td><button class="btn btn-danger"  onClick={()=>deletedata(customers.custId)}>delete</button></td>
                        </tr>
                    ) 
                    })
                }
                </tbody>
            </table>
        </div>
        </main>
    )
}

export default CustomersRedux