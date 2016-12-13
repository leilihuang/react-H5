import reqwest from 'reqwest';
import {showLoad , hideLoad} from './common/loading/action';
import {Toast} from 'antd-mobile';

class Util{
    ajax(params,dispatch){
        dispatch(showLoad());
        /**
         * @url 请求地址(必填)
         * @type  json数据类型
         * @method  请求类型*/
        return reqwest({
            url:params.url,
            type:params.type || 'json',
            method:params.method || 'GET',
            data:params.data
        }).fail(function (error) {
            Toast.fail("系统繁忙，请稍后重试！", 1);
        }).always(function(){
            dispatch(hideLoad());
        })
    }
}

const util = new Util();

export default util;