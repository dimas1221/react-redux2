import { data } from "jquery";
import ActionTypes from "../Constant/ActionType";
import ApiCustomers from "../Service/apiCustomers";

export const createCustomers = (customers) => async (dispatch) =>{
    try{
        const res = await ApiCustomers.create({customers});
        dispatch({
            type: ActionTypes.ADD_CUSTOMERS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    }catch (err){
        return Promise.reject(err);
    }
};

export const getCustomers = () => async (dispatch)=>{
    try {
        const res = await ApiCustomers.getAll();
        dispatch({
            type: ActionTypes.GET_CUSTOMERS,
            payload:res.data
        });
    } catch (error) {
        console.log(error)
    }
};

export const updateCustomers = (id, data)=> async (dispatch)=>{
    try {
        const res = await ApiCustomers.update(id, data);
        dispatch({
            type: ActionTypes.UPDATE_CUSTOMERS,
            payload: data,
        });
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
};

export const deleteCustomers = (id)=> async (dispatch)=>{
    try {
        const res = await ApiCustomers.remove(id);
        dispatch({
            type: ActionTypes.DEL_CUSTOMERS,
            payload: {id}
        })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}