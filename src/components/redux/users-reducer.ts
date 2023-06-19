import {ActionTypes, DispatchType} from './redux-store';
import {usersApi} from '../../api/api';

export type UsersType = {
    usersArr: UsersArrType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UsersArrType = {
    id: number,
    followed: boolean,
    name: string,
    city: string,
    photos: { small: string, large: string }
}

const initialState: UsersType = {
    usersArr: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersType = initialState, action: ActionTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                usersArr: state.usersArr.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                usersArr: state.usersArr.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case 'SET-USERS':
            return {...state, usersArr: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? state.followingInProgress.concat(action.userId)
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
};


export const FollowAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const UnFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const SetUsersAC = (users: UsersArrType[]) => ({type: 'SET-USERS', users}) as const
export const SetCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage: currentPage}) as const
export const SetTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount: totalCount}) as const
export const SetFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching: isFetching}) as const
export const ToggleFollowingInProgressAC = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching: isFetching,
    userId: userId
}) as const

export const getUsersThunkCreator = (pageNumber: number, pageSize: number) => {
    return (dispatch: DispatchType) => {
        dispatch(SetCurrentPageAC(pageNumber))
        dispatch(SetFetchingAC(true))
        usersApi.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(SetUsersAC(data.items))
                dispatch(SetFetchingAC(false))
                dispatch(SetTotalUsersCountAC(data.totalCount))
                return data;
            })
    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: DispatchType) => {
        dispatch(ToggleFollowingInProgressAC(true, userId))
        initialState.followingInProgress.some(id => id === userId)
        usersApi.followUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(UnFollowAC(userId))
                }
                dispatch(ToggleFollowingInProgressAC(false, userId))
            })
    }
}
export const unFollowThunkCreator = (userId: number) => {
    return (dispatch: DispatchType) => {
        dispatch(ToggleFollowingInProgressAC(true, userId))
        initialState.followingInProgress.some(id => id === userId)
        usersApi.UnfollowUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(FollowAC(userId))
                }
                dispatch(ToggleFollowingInProgressAC(false, userId))
            })
    }
}
