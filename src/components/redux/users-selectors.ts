import {AppReduxStateType} from './redux-store';

export const getUsers = (state: AppReduxStateType) => {
    return state.usersPage.usersArr
}

export const getPageSize = (state: AppReduxStateType) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppReduxStateType) => {
    return state.usersPage.currentPage
}
export const getTotalUsersCount = (state: AppReduxStateType) => {
    return state.usersPage.totalUsersCount
}
export const getFollowingInProgress = (state: AppReduxStateType) => {
    return state.usersPage.followingInProgress
}
export const getIsFetching = (state: AppReduxStateType) => {
    return state.usersPage.isFetching
}