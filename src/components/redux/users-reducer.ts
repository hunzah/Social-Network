import {ActionTypes} from './redux-store';

export type UsersType = {
    usersArr: UsersArrType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
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
    followingInProgress: false
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
            console.log(action.followingInProgress)
            return {...state, followingInProgress: action.followingInProgress}
        default:
            return state
    }
};


export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const UnFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const SetUsersAC = (users: UsersArrType[]) => ({type: 'SET-USERS', users}) as const
export const SetCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage: currentPage}) as const
export const SetTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount: totalCount}) as const
export const SetFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching: isFetching}) as const
export const followingInProgressAC = (followingInProgress: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    followingInProgress: followingInProgress
}) as const
