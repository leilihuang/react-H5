import {GET_All_TABLE} from './action';

const initState = {
    allTable:[]
};
export const detailRs  = (state = initState , action) =>{
    switch (action.type){
        case GET_All_TABLE:
            return Object.assign({},state,action);
        default:
            return state;
    }
};