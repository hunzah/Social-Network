import {combineReducers, createStore, Store} from 'redux';
import {friendsReducer} from './friends-reducer';
import {messageSendAC, messagesReducer, newMessageBodyAC} from './messages-reducer';
import profileReducer, {addPostAC, setUserProfileAC, updateNewPostTextAC} from './profile-reducer';
import {
    usersReducer,
    followAC,
    SetCurrentPageAC,
    SetUsersAC,
    UnFollowAC,
    SetTotalUsersCountAC,
    SetFetchingAC
} from './users-reducer';


export type DispatchType = (action: ActionTypes) => void;

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof messageSendAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>
    | ReturnType<typeof SetFetchingAC>


const reducers = combineReducers({
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

const store = createStore(reducers)

export type AppReduxStateType = ReturnType<typeof reducers>

export type RootStore = Store<AppReduxStateType, ActionTypes>


export default store