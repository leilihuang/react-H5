import util from '../../ajax';

export const GET_All_TABLE = 'GET_ALL_TABLE';

const getAllTable = (allTable) =>({
    type:GET_All_TABLE,
    allTable
});
export const getAllTableApi = (id) => (dispatch) =>{
    util.ajax({
        url:'/getAllTable.json'
    },dispatch).then(function (data) {
        dispatch(getAllTable(data.data));
    },function(error){
        console.log(error)
    })
};