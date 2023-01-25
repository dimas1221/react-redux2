import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ApiCustomers from '../Redux/Service/apiCustomers';
import { updateCustomers } from '../Redux/Action/reducerAction';


const EditCustRedux = () => {
    const {state}= useLocation();
    const {id} =state || {};

    let navigate = useNavigate()

    // const dispatch =useDispatch()
    // const [dataCust, setDataCust]= useState({
    //     custId:'',
    //     custName:'',
    //     custCity:''
    // })

    const dispatch = useDispatch();
    const [dataCust, setDataCust]= useState({
        custId :'',
        custName : '',
        custCity:''
    })

    useEffect(()=>{
        ApiCustomers.getId(id)
        .then(res=>{
            setDataCust({
                ...dataCust,
                custId: res.data.custId,
                custName: res.data.custName,
                custCity: res.data.custCity,
            })
        })
        .catch(err => alert(err))
    },[])

    // const evenHandler1 = nama => event=>{
    //     setDataCust({...dataCust, [nama]: event.target.value})
    // }
    const evenHandler = namae => event =>{
        setDataCust({...dataCust, [namae]: event.target.value})
    }

    const updateContent = (e)=>{
        e.preventDefault();
        dispatch(updateCustomers(dataCust.custId, dataCust))
        .then(()=>{
            navigate('/customers')
        })
        .catch(e=>{
            console.log(e)
        })
    }

    return(
        <main id="main" class="main">
            <div class="container">
                <h1>Eaxam</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInput8" class="form-label">custName</label>
                    <input value={dataCust.custName} onChange={evenHandler('custName')} type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInput3" class="form-label">custCity</label>
                    <input value={dataCust.custCity} onChange={evenHandler('custCity')} type="text" class="form-control"/>
                </div>
                <button onClick={updateContent} class="btn btn-primary">Submit</button>
            </form>
            </div>
        </main>
    )
}

export default EditCustRedux;