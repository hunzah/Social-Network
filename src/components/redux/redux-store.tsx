import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {friendsReducer} from './friends-reducer';
import {messageSendAC, messagesReducer, newMessageBodyAC} from './messages-reducer';
import profileReducer, {addPostAC, setStatusAC, setUserProfile, updateNewPostTextAC} from './profile-reducer';
import {
    followAC,
    SetCurrentPageAC,
    SetFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    toggleFollowingInProgressAC,
    UnFollowAC,
    usersReducer
} from './users-reducer';
import {authReducer, setLoadingAC, setUserDataAC} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'


export type DispatchType = (action: ActionTypes) => void;

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof messageSendAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>
    | ReturnType<typeof SetFetchingAC>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof toggleFollowingInProgressAC>



const reducers = combineReducers({
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppReduxStateType = ReturnType<typeof reducers>

export type RootStore = Store<AppReduxStateType, ActionTypes>

// @ts-ignore
window.store = store

export default store
