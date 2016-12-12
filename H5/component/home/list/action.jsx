import Util from '../../../util/js/util';
import { showLoad , hideLoad } from '../../common/loading/action.jsx';

export const LIST_DATA = 'LIST_DATA';

export const initList =(data) => ({
    type:LIST_DATA,
    ListApp:{
        data:data.data
    },
    isLoading:{
        animating:true,
        text:'加载完毕'
    }
});

const loading = (isLoading) => ({
    type:'loading',
    ListApp:{
        data:[]
    },
    isLoading:{
        animating:isLoading.animating,
        text:isLoading.text
    }
});

export const getList = (Loading)=> (dispatch) =>{
    dispatch(showLoad());
    return Util.ajax({url:'/list.json'},data => {
        dispatch(hideLoad());
        dispatch(initList(data))
    });
};