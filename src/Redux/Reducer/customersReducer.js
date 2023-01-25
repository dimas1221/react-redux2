import ActionTypes from "../Constant/ActionType";

const initialState ={
    cust:[] 
}
function customersReducers(state = initialState, action) {
    switch(action.type){
        case ActionTypes.GET_CUSTOMERS:
            return{...state, cust:action.payload};
        case ActionTypes.ADD_CUSTOMERS:
            return{...state};
        case ActionTypes.UPDATE_CUSTOMERS:
            return applyUpdateCust(state, action)
        case ActionTypes.DEL_CUSTOMERS:
            return{
                ...state,
                cust:state.cust.filter(customers => customers.id !== action.payload.id)
            }
        default:
            return state
    }
}

const applyUpdateCust = async (state, action)=>{
    return state.cust.map((customers)=>{
        if(customers.id === action.payload.id){
            return{
                ...state,
                ...action.payload,
            };
        }else{
            return state;
        }
    });
}

export default customersReducers;