var path = require('path'),
    px2rem  = require('postcss-px2rem'),
    webpack = require('webpack');


var config = {
    cache:true,
    devtool: 'eval',
    entry: {
        index:['webpack/hot/dev-server', path.resolve(__dirname, './H5/main')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve:{
        //modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions:['','.web.js','.js','.json','.jsx','.less']
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings : false
            }
        }),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./dist/vendor-manifest.json')
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude:/node_modules/,
            query: {
                presets: ['react', 'es2015'],
                plugins: ["transform-class-properties",["import",{libraryName:"antd-mobile",style:"css"}]],
                cacheDirectory: true
            },
            include:__dirname
        }, {
            test: /\.less$/,
            loader: 'style!css!postcss!less'
        },{
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url?limit=25000'
        }]
    },
    postcss: function() {
        return [px2rem({remUnit: 75})];
    }
};

module.exports = config;
