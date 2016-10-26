import {GET_LIST} from './action';

const index = (state = [] , action) =>{
    switch(action.type){
        case GET_LIST:
            return action.data;
        default :
            return state;
    }
};

export default index;