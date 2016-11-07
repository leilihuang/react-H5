import './util/sass/main.scss';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router , Route , browserHistory } from 'react-router';

import reducers from './config/reducers';
import routers from './config/router';
import configureStore from './config/store';

import Home from './component/home/index/index';

import rem from './util/js/rem.js';

//import DevTools from './component/DevTools';  默认关闭调试工具

const store = configureStore();

if(process.env.NODE_ENV == 'development'){
    console.log("开发模式开启mock拦截ajax请求");
    console.log(" 默认关闭调试工具");
    //require('./mock/testData');
}
const Root = () =>{
    if(process.env.NODE_ENV == 'development'){
        return (
            <Provider store={store}>
                <div>
                    <Router routes={routers} history={browserHistory}></Router>
                    {/*      <DevTools />  默认关闭调试工具*/}
                </div>
            </Provider>)
    }else{
        return (
            <Provider store={store}>
                <Router routes={routers} history={browserHistory}></Router>
            </Provider>)
    }
};
render(
    <Root />,
    document.getElementById('app')
);
