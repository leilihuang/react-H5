import React from 'react';
import { Route ,IndexRoute} from 'react-router';
import Index from './index/index';
import Detail from './detail/detail';
import List from './list/list';

export default (
    <div>
        <IndexRoute component={Index} />
        <Route path='home' component={Index} />
        <Route path='home/list' component={List} />
        <Route path='home/detail/:id' component={Detail} />
    </div>
)