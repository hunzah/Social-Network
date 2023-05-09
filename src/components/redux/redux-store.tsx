import {combineReducers, createStore} from 'redux';
import {friendsReducer} from './friends-reducer';
import {messagesReducer} from './messages-reducer';
import profileReducer from './profile-reducer';


let reducers = combineReducers({
    friendsReducer,
    messagesReducer,
    profileReducer
})

let store = createStore(reducers)

export type RootState = ReturnType<typeof store.getState>

export default store