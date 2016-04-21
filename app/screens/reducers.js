import { combineReducers } from 'redux';

// Import reducers
import login from './login/reducers'
import step1 from './register/step1/reducers'
import step2 from './register/step2/reducers'
import step3 from './register/step3/reducers'

export const screenReducer = combineReducers({
    login,
    step1,
    step2,
    step3
})
