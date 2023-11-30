import { SET_EMPLOYEES } from "./actions";

const intialState = {
    employee:null,
};

const employeeReducer = (state=intialState,action)=>{

    switch(action.type){
        case SET_EMPLOYEES:return{
            ...state,
            employee:action.payload,
        }
        default:
            return state;

    }
};

export default employeeReducer;

