import React from 'react';
import { Route } from 'react-router';
// import Index from './index/index';
import UploadTable from './update/upload';
import CreateTable from './create/create';
import SearchTable from './search/search';
const Index = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./index/index').default)
    },'Index')
};
// const CreateTable = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./create/create').default)
//     },'createTable')
// };
// const UploadTable = (location , cb) =>{
//     require.ensure([],require => {
//         cb(null,require('./update/upload').default)
//     },'uploadTable')
// };
// const SearchTable = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./search/search').default)
//     },'searchTable')
// };

export default (
    <div>
        <Route path="/" getComponent={Index} />
        <Route path='index' getComponent={Index} />
        <Route path='create' component={CreateTable} />
        <Route path='upload' component={UploadTable} />
        <Route path='search' component={SearchTable} />
    </div>
)