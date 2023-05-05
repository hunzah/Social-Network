import {v1} from 'uuid';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';


export type StoreType = {
    _state: StateType
    getState: () => StateType
    renderEntireTree: () => void
    subscribe: (callback: () => void) => void | any
    dispatch: DispatchType
}

export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
    friendsPage:FriendsPageType

}

// Dialogs
export type MessagesPageType = {
    dialogsArr: DialogsArrType[]
    messageArr: MessageArrType[]
    newMessageBody: string
}
export type DialogsArrType = {
    path: string
    name: string
}
export type MessageArrType = {
    message: string
}

//Navbar > Profile
export type ProfilePageType = {
    postsArr: PostsArrType[]
    newPostText: string
}
export type PostsArrType = {
    id: number
    message: string
    count: number
}

//Navbar > Friends
export type FriendsPageType = {Friends: FriendsArrType[]}
export type FriendsArrType = {
    id: string, avatar: string, name: string
}


export type DispatchType = (action: ActionTypes) => void;
export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof messageSendAC>


export const store: StoreType = {
    _state: {
        messagesPage: {
            dialogsArr: [
                {path: '1', name: 'Curtis James'},
                {path: '2', name: 'John Carter'},
                {path: '3', name: 'Andre Lauren'},
                {path: '4', name: 'Christopher George'},
            ],
            messageArr: [
                {message: 'Hi!'},
                {message: 'my name is Curtis James!'},

            ],
            newMessageBody: '',
        },
        profilePage: {
            postsArr: [
                {id: 1, message: 'Hi, how are you?', count: 15},
                {id: 2, message: 'It\'s my first post', count: 16},
            ],
            newPostText: ''
        },
        friendsPage: {
            Friends: [
                {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Victoria'},
                {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Ivan'},
                {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'John'},
                {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Ali'},
                {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Curtis'},
                {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Alex'}
            ]
        }
    },
    getState() {
        return this._state
    },
    renderEntireTree() {
        console.log('state changed')
    },
    subscribe(callback) {
        this.renderEntireTree = callback
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(store._state.profilePage, action)
        this._state.messagesPage = messagesReducer(store._state.messagesPage, action)
        this._state.friendsPage = friendsReducer(store._state.friendsPage, action)
        this.renderEntireTree()
    }
}


export const messageSendAC = () => ({type: 'MESSAGE-SEND'} as const)
export const newMessageBodyAC = (body: string) => ({type: 'NEW-MESSAGE-BODY', body: body} as const)

export const addPostAC = (text: string) => ({type: 'ADD-POST', text: text} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default store
