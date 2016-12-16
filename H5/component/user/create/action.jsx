import util from '../../ajax';
import {browserHistory} from 'react-router';
import {Toast} from 'antd-mobile';


export const CREATE_TABLE = 'CREATE_TABLE';
export const MEET_USER = 'MEET_USER';

const getMeetUser = (allUser) =>({
    type:MEET_USER,
    allUser
});

//更新会议
export const getMeetUserApi = (obj) => (dispatch) =>{
    util.ajax({url:'/conference/modifyconferences',data:obj},dispatch).then(function (data) {
        if(data.success){
            browserHistory.push('/Index');
            // dispatch(getMeetUser(data.info));
        }else{
            Toast.fail(data.errorMsg, 1);
        }
    })
};

//创建会议
export const createTable = (obj) => (dispatch) =>{
    util.ajax({url:'/conference/createconferences',data:obj},dispatch).then(function (data) {
        if(data.success && data.info){
            browserHistory.push('/Index');
        }else{
            Toast.fail(data.errorMsg, 1);
        }
    })
};

