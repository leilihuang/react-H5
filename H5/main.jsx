import './util/sass/util.scss';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router , Route , browserHistory } from 'react-router';

import reducers from './config/reducers';
import routers from './config/router';

import rem from './util/js/rem.js';

let store = createStore(reducers);

render(
    <Provider store={store}>
        <Router routes={routers} history={browserHistory}></Router>
    </Provider>,
    document.getElementById('app')
);
