import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCustomers } from '../Redux/Action/reducerAction';


const AddCustRedux = ()=>{
    let navigate = useNavigate()

    const dispatch = useDispatch()
    const [dataCust, setDataCust]= useState({
        custId :'',
        custName : '',
        custCity:''
    })

    const evenHandler = nama => event =>{
        setDataCust({...dataCust, [nama]: event.target.value})
    }

    const addData = (e) =>{
        e.preventDefault();
        dispatch(createCustomers(dataCust))
        .then(()=>{
            navigate('/customers')
        })
        .catch(e =>{
            alert(e)
        })
    }

    return(
        <main id="main" class="main">
        <div class="container">
            <form>
                <div class="mb-3">
                    <label for="exampleInput1" class="form-label">custId</label>
                    <input value={dataCust.custId} onChange={evenHandler('custId')} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInput2" class="form-label">custName</label>
                    <input value={dataCust.custName} onChange={evenHandler('custName')} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInput3" class="form-label">custCity</label>
                    <input value={dataCust.custCity} onChange={evenHandler('custCity')} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button onClick={addData} class="btn btn-primary">Submit</button>
            </form>
        </div>
        </main>
    )
}

export default AddCustRedux