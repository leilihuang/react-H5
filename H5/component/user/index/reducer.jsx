import {GET_All_TABLE , UPLOAD_TABLE,CHECK_BOX ,SEARCH_OBJ} from './action';

const initState = {
    allTable:[],
    uploadTables:{},
    checks:[],
    searchRs:{}
};
export const userIndexRs  = (state = initState , action) =>{
    switch (action.type){
        case GET_All_TABLE:
            return Object.assign({},state,action);
        case UPLOAD_TABLE:
            return Object.assign({},state,action);
        case CHECK_BOX:
            return Object.assign({},state,action);
        case SEARCH_OBJ:
            return Object.assign({},state,action);
        default:
            return state;
    }
};