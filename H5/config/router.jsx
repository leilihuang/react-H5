import React from 'react';
import { Route } from 'react-router';
import homeRoute from '../component/home/router.home';
import userRoute from '../component/user/router.home';
import App from '../component/app';

export default (
    <div>
        <Route path='/' component={App}>
            {homeRoute}
            {userRoute}
        </Route>
    </div>
);