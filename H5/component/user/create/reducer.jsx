import { MEET_USER } from './action';

const initState = {
    allUser:[]
};
export const createTabRs = (state = initState , action) =>{
    switch (action.type){
        case MEET_USER:
            return Object.assign({},state,action);
        default:
            return state;
    }
};