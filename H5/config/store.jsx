if(process.env.NODE_ENV == 'production'){
    module.exports = require('./store.pro');
}else{
    module.exports = require('./store.dev');
}