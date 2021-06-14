import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import systemEventReducer from './systemEventReducer';
import skillStateReducer from './skillStateReducer';
//Combine all the sub reducers
const rootReducer = combineReducers({
    character: characterReducer,
    systemEvent: systemEventReducer,
    skillState: skillStateReducer
})

export default rootReducer