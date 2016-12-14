import reqwest from 'reqwest';
import {showLoad , hideLoad} from './common/loading/action';
import {Toast} from 'antd-mobile';

class Util{
    ajax(params,dispatch){
        const defaultParams = {
            type:'json',
            method:'GET'
        };

        dispatch(showLoad());
        /**
         * @url 请求地址(必填)
         * @type  json数据类型
         * @method  请求类型*/
        return reqwest(Object.assign({},defaultParams,params)).fail(function (error) {
            Toast.fail("系统繁忙，请稍后重试！", 1);
        }).always(function(){
            dispatch(hideLoad());
        })
    }
}

const util = new Util();

export default util;