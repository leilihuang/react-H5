import util from '../../ajax';
import {Toast} from 'antd-mobile';

export const GET_All_TABLE = 'GET_ALL_TABLE';
export const UPLOAD_TABLE = 'UPLOAD_TABLE';

export const cancelTable = (idArray) => (dispatch) =>{
  util.ajax({
      url:"/cancelTable"
  },dispatch).then(function (data) {
      if(data.success && data.info){
          Toast.success("成功取消会议！！！");
          dispatch(getAllTableApi())
      }else{
          Toast.fail(data.errorMsg, 1);
      }
  })
};

export const uploadTable = (uploadTables) =>({
   type:UPLOAD_TABLE,
    uploadTables
});

const getAllTable = (allTable) =>({
    type:GET_All_TABLE,
    allTable
});
export const getAllTableApi = (id) => (dispatch) =>{
    util.ajax({
        url:'/getAllTable.json',
        data:id || {}
    },dispatch).then(function (data) {
        if(data.success){
            dispatch(getAllTable(data.info));
        }else{
            Toast.fail(data.errorMsg, 1);
        }
    })
};