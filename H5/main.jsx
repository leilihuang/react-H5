import './util/sass/main.scss';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router , Route , browserHistory } from 'react-router';

import reducers from './config/reducers';
import routers from './config/router';
import configStore from './config/store';

import Home from './component/home/index/index';

import rem from './util/js/rem.js';
import DevTools from './component/DevTools';

if(process.env.NODE_ENV == 'development'){
    console.log("开发模式开启mock拦截ajax请求");
    require('./mock/testData');
}

let store = configStore();

render(
    <Provider store={store}>
        <Router routes={routers} history={browserHistory}></Router>
        <DevTools />
    </Provider>,
    document.getElementById('app')
);
