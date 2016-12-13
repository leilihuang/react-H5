import React from 'react';
import { Route } from 'react-router';
import Index from './index/index';

const CreateTable = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./create/create').default)
    },'createTable')
};
const UploadTable = (location , cb) =>{
    require.ensure([],require => {
        cb(null,require('./update/upload').default)
    },'uploadTable')
};
const SearchTable = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./search/search').default)
    },'searchTable')
};

export default (
    <div>
        <Route path="/" component={Index} />
        <Route path='index' component={Index} />
        <Route path='create' getComponent={CreateTable} />
        <Route path='upload' getComponent={UploadTable} />
        <Route path='search' getComponent={SearchTable} />
    </div>
)