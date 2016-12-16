const path = require('path'),
    pxtorem = require('postcss-pxtorem'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

const config = {
    cache:true,
    devtool: 'source-map',
    entry: {
        index:['webpack/hot/dev-server', path.resolve(__dirname, 'H5/main')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    resolve:{
        extensions:['','.web.js','.js','.json','.jsx'],
        alias:{
            moment: "moment/min/moment.min.js"
        }
    },
    module: {
        noParse:[/moment/],
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude:/node_modules/,
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ["transform-class-properties","transform-runtime","babel-plugin-transform-decorators-legacy",["antd",{libraryName:"antd-mobile",style:"css"}]]
            },
            include:__dirname
        },{
            test: /\.(eot|svg|ttf|woff|woff2)\w*/,
            loader: 'url?limit=8192'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        },{
            test: /\.css$/,
            loader: 'style!css!postcss'
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
            compress:{
                warnings : false
            }
        }),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./dist/vendor-manifest.json')
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        new HtmlWebpackPlugin({
            title:"娃哈哈福礼惠",
            hash:true,
            template:'index.template.html'
        })
    ]
};

module.exports = config;
