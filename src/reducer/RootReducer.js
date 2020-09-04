import ListReducer from './ListReducer';
import SignUpReducer from './SignUpReducer';

import {combineReducers} from 'redux';

export default combineReducers({
        AllComentsList:ListReducer,
        SignUp:SignUpReducer,
    })