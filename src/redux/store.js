// import {createStore} from 'redux'
// import rootReducer from './reducer';
// import {composeWithDevTools} from 'redux-devtools-extension'
// const composedExhancers = composeWithDevTools();
// const store = createStore(rootReducer,composedExhancers);

import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";
import {configureStore} from '@reduxjs/toolkit'
// export default store;

const store = configureStore({
     reducer:{
        filters:filtersReducer.reducer,
        todoList:todoListReducer.reducer
     }

}
)
export default store ;