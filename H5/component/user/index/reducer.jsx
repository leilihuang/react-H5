import {GET_All_TABLE , CREATE_TABLE} from './action';

const initState = {
    allTable:[],
    addTables:[]
};
export const detailRs  = (state = initState , action) =>{
    switch (action.type){
        case GET_All_TABLE:
            return Object.assign({},state,action);
        case CREATE_TABLE:
            return [
                ...state.allTable,
                action.addTable
            ];
        default:
            return state;
    }
};