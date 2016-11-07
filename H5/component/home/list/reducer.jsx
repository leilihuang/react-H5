import {LIST_DATA} from './action';

const initState = {
    ListApp:{
        data:[]
    },
    isLoading:{
        animating:false,
        text:''
    }
};

export const homeList = (state = initState , action) =>{
    switch(action.type){
        case LIST_DATA:
            return {...state,...action};
        case 'loading':
            return {...state,...action};
        default :
            return state;
    }
};

