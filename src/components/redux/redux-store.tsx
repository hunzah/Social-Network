import {applyMiddleware, combineReducers, compose, createStore, Store} from 'redux';
import {friendsReducer} from './friends-reducer';
import {MessageSendAC, messagesReducer} from './messages-reducer';
import profileReducer, {AddPostAC, SavePhotoAC, SetStatusAC, SetUserProfileAC} from './profile-reducer';
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
import appReducer, {InitializedSuccessAC} from './app-reducer';


export type DispatchType = (action: ActionTypes) => void;

export type ActionTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof SetUserProfileAC>
    | ReturnType<typeof SetStatusAC>
    | ReturnType<typeof MessageSendAC>
    | ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>
    | ReturnType<typeof SetFetchingAC>
    | ReturnType<typeof SetUserDataAC>
    | ReturnType<typeof SetLoadingAC>
    | ReturnType<typeof ToggleFollowingInProgressAC>
    | ReturnType<typeof InitializedSuccessAC>
    | ReturnType<typeof SavePhotoAC>


const reducers = combineReducers({
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export type AppReduxStateType = ReturnType<typeof reducers>

export type RootStore = Store<AppReduxStateType, ActionTypes>

// @ts-ignore
window._store_ = store
export default store
