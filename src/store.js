import { createStore,applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {   // 开发环境下需要日志
    middleware.push(logger )
}
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
export default store;
