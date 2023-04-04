import {createStore} from 'redux'
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
const composedExhancers = composeWithDevTools();
const store = createStore(rootReducer,composedExhancers);

export default store;