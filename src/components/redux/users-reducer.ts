import {ActionTypes} from './redux-store';

export type UsersType = {
    usersArr: UsersArrType[]
}
export type UsersArrType = {
    id: number,
    followed: boolean,
    name: string,
    city: string,
    avatar: string
}

const initialState: UsersType = {
    usersArr: [
        {id: 1, followed: true, name: 'Curtis James', city: 'New York', avatar: ''},
        {id: 2, followed: true, name: 'Christopher  George', city: 'New York', avatar: ''},
        {id: 3, followed: true, name: 'John Carter', city: 'New York', avatar: ''},
        {id: 4, followed: false, name: 'Tupac Amaru Shakur', city: 'New York', avatar: ''},
        {id: 5, followed: false, name: 'Andre Romelle Young', city: 'Compton', avatar: ''}
    ]
}

const usersReducer = (state: UsersType = initialState, action: ActionTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, usersArr: state.usersArr.map(u => u.id === action.UseId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, usersArr: state.usersArr.map(u => u.id === action.UseId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, usersArr: [...state.usersArr, action.users]}
        default:
            return state
    }
};


export const followAC = (UseId: number) => ({type: 'FOLLOW', UseId: UseId}) as const
export const UnFollowAC = (UseId: number) => ({type: 'UNFOLLOW', UseId: UseId}) as const
export const SetUsersAC = (users: UsersArrType) => ({type: 'SET-USERS', users}) as const
export default usersReducer