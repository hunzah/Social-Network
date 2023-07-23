import {v1} from 'uuid';
import {ActionTypes} from './redux-store';

export type FriendsPageType = { Friends: FriendsArrType[] }
export type FriendsArrType = {
    id: string, avatar: string, name: string
}

const initialState = {
    Friends: [
        {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Victoria'},
        {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Ivan'},
        {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'John'},
        {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Ali'},
        {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Curtis'},
        {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Alex'}
    ]
}

export const friendsReducer = (state: FriendsPageType = initialState, action: ActionTypes): FriendsPageType => {
    return state

};





