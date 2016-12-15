// import { combineReducers } from 'redux';

import * as appRs from '../component/reducer.app';
const {combineReducers} = require('redux');

const reducers = combineReducers(appRs);

export default reducers;
