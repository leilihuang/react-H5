import Util from '../../../util/js/util';

export const GET_LIST = 'GET_LIST';

function initList(data){
    return {
        type:GET_LIST,
        data
    }
}

export function getList(){
    return dispatch =>
    Util.ajax({url:'/home/index/getList'}, function (data) {
        dispatch(initList(data));
    })
}