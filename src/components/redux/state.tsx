import {renderEntireTree} from '../../render';
import {v1} from 'uuid';

export type StateType = {
    messagesPage:
        {
            dialogsArr: DialogsArrType[]
            messageArr: MessageArrType[]
        }
    profilePage: ProfilePageType
    friendsPage:
        { Friends: FriendsArrType[] }
}



// Dialogs
export type DialogsArrType = {
    path: string
    name: string
}
export type MessageArrType = {
    text: string
}




//Navbar > Profile
export type ProfilePageType = {
    postsArr: PostsArrType[]
    newPostText:string
}
export type PostsArrType = {
    id: number
    message: string
    count: number
}



//Navbar > Friends
export type FriendsArrType =
    { id: string, avatar: string, name: string }



let state: StateType = {
    messagesPage: {
        dialogsArr: [
            {path: '1', name: 'Curtis James'},
            {path: '2', name: 'John Carter'},
            {path: '3', name: 'Andre Lauren'},
            {path: '4', name: 'Christopher George'},
        ],
        messageArr: [
            {text: 'Hi!'},
            {text: 'my name is Curtis James!'},
            {text: 'Hi!'},
            {text: 'Hey!'},
        ],
    },
    profilePage: {
        postsArr: [
            {id: 1, message: 'Hi, how are you?', count: 15},
            {id: 2, message: 'It\'s my first post', count: 16},
        ],
        newPostText:''
    },
    friendsPage: {
        Friends: [
            {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Victoria'},
            {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Victoria'},
            {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Victoria'},
            {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Victoria'},
            {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Victoria'},
            {id: v1(), avatar: 'https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg', name: 'Alex'}
        ]
    }
}


export const addPost: (text:string) => void = (text:string) => {
    const newPost: PostsArrType = {
        id: 3,
        message: state.profilePage.newPostText,
        count: 2
    }
    state.profilePage.postsArr.unshift(newPost)
    state.profilePage.newPostText = ''

    renderEntireTree(state)
}

export const updateNewPostText: (newText:string) => void = (newText:string) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}




export default state
