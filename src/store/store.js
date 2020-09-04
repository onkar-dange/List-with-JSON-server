import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/RootReducer';


export default ()=>{
    const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
);
return store;
}
