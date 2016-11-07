import {GET_LIST} from './action';

export const homeIndex = (state = [] , action) =>{
    switch(action.type){
        case GET_LIST:
            return action.data;
        default :
            return state;
    }
};

