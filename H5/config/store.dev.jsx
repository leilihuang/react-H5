import { createStore , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

const configStore = preloadedState =>{
    const store = createStore(
        reducers,
        preloadedState,
        compose(
            applyMiddleware(thunk,createLogger())
        )
    );
    return store;
};

export default configStore;