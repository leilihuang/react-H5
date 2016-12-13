const path = require('path'),
    pxtorem = require('postcss-pxtorem'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

var config = {
    cache:true,
    devtool: 'source-map', //source-map
    entry: {
        index:path.resolve(__dirname, 'H5/main')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: "[name].min.js"
    },
    resolve:{
        extensions:['','.web.js','.js','.json','.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude:/node_modules/,
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ["transform-class-properties","transform-runtime","babel-plugin-transform-decorators-legacy",["antd",{libraryName:"antd-mobile",style:"css"}]]
            },
            include:__dirname
        }, {
            test: /\.scss/,
            loader: ExtractTextPlugin.extract('style','css!sass')
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style','css!postcss')
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url?limit=8192'
        }]
    },
    postcss: function () {
        return [pxtorem({
            rootValue: 75,
            propWhiteList: []
        })]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: false
            },
            compress:{
                warnings : false
            }
        }),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./dist/vendor-manifest.json')
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlugin({
            title:"娃哈哈福礼惠",
            hash:true,
            template:'index.template.html'
        }),
        new webpack.optimize.DedupePlugin()
    ]
};

console.log(process.env.NODE_ENV);

module.exports = config;
