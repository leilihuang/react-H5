import { createStore , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
//import DevTools from '../component/DevTools';  默认关闭调试工具

const configureStore = preloadedState => {
    const store = createStore(
        reducers,
        preloadedState,
        compose(
            applyMiddleware(thunk,  createLogger())
         /*   DevTools.instrument() 默认关闭调试工具*/
        )
    );
    return store
};

export default configureStore


