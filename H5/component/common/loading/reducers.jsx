import { SHOW_LOAD , HIDE_LOAD} from './action';

export const commonLoad = (state = {} , action)=>{
    switch (action.type){
        case SHOW_LOAD:
        case HIDE_LOAD:
            return Object.assign({},state,action.load)
        default :
            return state;

    }
};