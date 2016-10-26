import reqwest from 'reqwest';

class Util{
    ajax(params,callback){
        /**
         * @url 请求地址(必填)
         * @type  json数据类型
         * @method  请求类型
         * @callback（必填）  回调函数*/
        reqwest({
            url:params.url,
            type:params.type || 'json',
            method:params.method || 'GET',
            success: function (data) {
                callback(data);
            },
            error: function (error) {
                callback(error);
            }
        })
    }
}

const util = new Util();

export default util;