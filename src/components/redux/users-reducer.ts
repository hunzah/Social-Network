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
        case 'users/FOLLOW':
            return {
                ...state,
                usersArr: state.usersArr.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case 'users/UNFOLLOW':
            return {

                ...state,
                // users: updateObjectInArray(state.usersArr,action.userId,'id', {followed:true})
                usersArr: state.usersArr.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case 'users/SET-USERS':
            return {...state, usersArr: action.users}
        case 'users/SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'users/SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'users/TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'users/TOGGLE-IS-FOLLOWING-PROGRESS':
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


export const FollowAC = (userId: number) => ({type: 'users/FOLLOW', userId}) as const
export const UnFollowAC = (userId: number) => ({type: 'users/UNFOLLOW', userId}) as const
export const SetUsersAC = (users: UsersArrType[]) => ({type: 'users/SET-USERS', users}) as const
export const SetCurrentPageAC = (currentPage: number) => ({
    type: 'users/SET-CURRENT-PAGE',
    currentPage: currentPage
}) as const
export const SetTotalUsersCountAC = (totalCount: number) => ({
    type: 'users/SET-TOTAL-COUNT',
    totalCount: totalCount
}) as const
export const SetFetchingAC = (isFetching: boolean) => ({
    type: 'users/TOGGLE-IS-FETCHING',
    isFetching: isFetching
}) as const
export const ToggleFollowingInProgressAC = (isFetching: boolean, userId: number) => ({
    type: 'users/TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching: isFetching,
    userId: userId
}) as const

export const getUsersThunkCreator = (pageNumber: number, pageSize: number) => {
    return async (dispatch: DispatchType) => {
        dispatch(SetCurrentPageAC(pageNumber))
        dispatch(SetFetchingAC(true))
        const response = await usersApi.getUsers(pageNumber, pageSize)
        dispatch(SetUsersAC(response.items))
        dispatch(SetFetchingAC(false))
        dispatch(SetTotalUsersCountAC(response.totalCount))
        return response;
    }
}

export const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: ActionTypes) => {
    dispatch(ToggleFollowingInProgressAC(true, userId))
    initialState.followingInProgress.some(id => id === userId)
    const response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator)
    }
    dispatch(ToggleFollowingInProgressAC(false, userId))

}


export const followThunkCreator = (userId: number) => {
    return async (dispatch: DispatchType) => {
        await followUnfollowFlow(dispatch, userId, usersApi.followUsers.bind(usersApi), UnFollowAC(userId))
    }
}
export const unFollowThunkCreator = (userId: number) => {
    return async (dispatch: DispatchType) => {
        await followUnfollowFlow(dispatch, userId, usersApi.unfollowUsers.bind(usersApi), UnFollowAC(userId))

    }
}
