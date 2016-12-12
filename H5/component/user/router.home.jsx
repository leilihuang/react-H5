import React from 'react';
import { Route ,IndexRoute} from 'react-router';
import User from './index/detail';
import Create from './create/create';


export default (
    <div>
        <Route path="/" component={User} />
        <Route path='User' component={User} />
        <Route path='Create' component={Create} />
    </div>
)