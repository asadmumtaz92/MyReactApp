import { combineReducers } from 'redux'

import peopleReducer from './peoples'
import companiesReducer from './companies'

const rootReducer = combineReducers({
    peopleReducer: peopleReducer,
    companiesReducer: companiesReducer,
})

export default rootReducer;
