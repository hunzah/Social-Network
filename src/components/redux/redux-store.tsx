import {combineReducers, createStore} from 'redux';
import {friendsReducer} from './friends-reducer';
import {messagesReducer} from './messages-reducer';
import profileReducer from './profile-reducer';
import {StoreType} from './store';


let reducers = combineReducers({
    friendsReducer,
    messagesReducer,
    profileReducer
})

let store:StoreType = createStore(reducers)


export default store