import {GET_All_TABLE , UPLOAD_TABLE} from './action';

const initState = {
    allTable:[],
    uploadTables:{}
};
export const userIndexRs  = (state = initState , action) =>{
    switch (action.type){
        case GET_All_TABLE:
            return Object.assign({},state,action);
        case UPLOAD_TABLE:
            return Object.assign({},state,action);
        default:
            return state;
    }
};