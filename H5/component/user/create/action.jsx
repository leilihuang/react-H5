import util from '../../ajax';
import {browserHistory} from 'react-router';
import {Toast} from 'antd-mobile';


export const CREATE_TABLE = 'CREATE_TABLE';
export const MEET_USER = 'MEET_USER';

const getMeetUser = (allUser) =>({
    type:MEET_USER,
    allUser
});

export const getMeetUserApi = () => (dispatch) =>{
    util.ajax({url:'/getMeetUser'},dispatch).then(function (data) {
        if(data.success){
            dispatch(getMeetUser(data.info));
        }else{
            Toast.fail(data.errorMsg, 1);
        }
    })
};

export const createTable = (obj) => (dispatch) =>{
    util.ajax({url:'/createTable'},dispatch).then(function (data) {
        if(data.success && data.info){
            browserHistory.push('/Index');
        }else{
            Toast.fail(data.errorMsg, 1);
        }
    })
};

