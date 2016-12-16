import util from '../../ajax';
import {Toast} from 'antd-mobile';

export const GET_All_TABLE = 'GET_ALL_TABLE';
export const UPLOAD_TABLE = 'UPLOAD_TABLE';
export const CHECK_BOX = 'CHECK_BOX';
export const SEARCH_OBJ = 'SEARCH_OBJ';

// 取消会议
export const cancelTable = (idArray) => (dispatch) =>{
  util.ajax({
      url:"/conference/cancelconferences"
  },dispatch).then(function (data) {
      if(data.success && data.info){
          Toast.success("成功取消会议！！！");
          dispatch(getAllTableApi());
          dispatch(addCheks([]));
      }else{
          Toast.fail(data.errorMsg, 1);
      }
  })
};
//获得更新会议的数据
export const uploadTable = (uploadTables) =>({
   type:UPLOAD_TABLE,
    uploadTables
});

const getAllTable = (allTable) =>({
    type:GET_All_TABLE,
    allTable
});
//查询会议，获得初始会议数据
export const getAllTableApi = (obj) => (dispatch) =>{
    util.ajax({
        url:'/conference/getconferences',
        data:obj || {}
    },dispatch).then(function (data) {
        if(data.success){
            dispatch(getAllTable(data.info));
        }else{
            Toast.fail(data.errorMsg, 1);
        }
    })
};
//添加选择会议
export const addCheks = (checks) =>({
    type:CHECK_BOX,
    checks
});
//获得查询条件
export const searchObj = (searchRs) =>({
   type: SEARCH_OBJ,
    searchRs
});