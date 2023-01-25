import axios from "../../Config/http-common";


const getAll =()=>{
    return axios.get("/cats/customers")
}

const getId = id =>{
    return axios.get(`/cats/${id}`)
}

const create = data =>{
    return axios.post("/cats/createcus", data.customers)
}

const update = (id, data)=>{
    return axios.put(`/cats/${id}`, data)
}

const remove = id =>{
    return axios.delete(`/cats/${id}`)
}

const ApiCustomers ={
    getAll,
    getId,
    create,
    update,
    remove
}

export default ApiCustomers