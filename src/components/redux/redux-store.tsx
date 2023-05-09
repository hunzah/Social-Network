import {combineReducers, createStore, Store} from 'redux';
import {friendsReducer} from './friends-reducer';
import {messagesReducer} from './messages-reducer';
import profileReducer from './profile-reducer';
import {ActionTypes} from './store';


const reducers = combineReducers({
    friendsReducer,
    messagesReducer,
    profileReducer
})

const store = createStore(reducers)

export type AppReduxStateType=ReturnType<typeof reducers>

export type RootStore = Store<AppReduxStateType,ActionTypes>


export default store