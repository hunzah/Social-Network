import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {friendsReducer} from './friends-reducer';
import {MessageSendAC, messagesReducer, NewMessageBodyAC} from './messages-reducer';
import profileReducer, {AddPostAC, SetStatusAC, SetUserProfile, UpdateNewPostTextAC} from './profile-reducer';
import {
    FollowAC,
    SetCurrentPageAC,
    SetFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    ToggleFollowingInProgressAC,
    UnFollowAC,
    usersReducer
} from './users-reducer';
import {authReducer, SetLoadingAC, SetUserDataAC} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'


export type DispatchType = (action: ActionTypes) => void;

export type ActionTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof SetUserProfile>
    | ReturnType<typeof SetStatusAC>
    | ReturnType<typeof NewMessageBodyAC>
    | ReturnType<typeof MessageSendAC>
    | ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>
    | ReturnType<typeof SetFetchingAC>
    | ReturnType<typeof SetUserDataAC>
    | ReturnType<typeof SetLoadingAC>
    // | ReturnType<typeof LogInAC>
    | ReturnType<typeof ToggleFollowingInProgressAC>


const reducers = combineReducers({
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppReduxStateType = ReturnType<typeof reducers>

export type RootStore = Store<AppReduxStateType, ActionTypes>

// @ts-ignore
window.store = store

export default store
