import {ActionTypes} from './redux-store';

export type UsersType = {
    usersArr: UsersArrType[]
}

export type UsersArrType = {
    id: number,
    followed: boolean,
    name: string,
    city: string,
    photos:{small:string, large:string}
}

const initialState: UsersType = {
    usersArr: []
}

const usersReducer = (state: UsersType = initialState, action: ActionTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, usersArr: state.usersArr.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}
        case 'UNFOLLOW':
            return {...state, usersArr: state.usersArr.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}
        case 'SET-USERS':
            return {...state, usersArr: [...state.usersArr, ...action.users]}
        default:
            return state
    }
};


export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const UnFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const SetUsersAC = (users: UsersArrType[]) => ({type: 'SET-USERS', users}) as const

export default usersReducer;