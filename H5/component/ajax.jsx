import reqwest from 'reqwest';
import {showLoad , hideLoad} from './common/loading/action';

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
            method:params.method || 'GET'
        }).always(function(){
            dispatch(hideLoad());
        })
    }
}

const util = new Util();

export default util;