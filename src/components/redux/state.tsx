import {v1} from 'uuid';


export type StoreType = {
    _state: StateType
    getState: () => StateType
    renderEntireTree: () => void
    subscribe: (callback: () => void) => void
    dispatch: DispatchType
}

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
    newPostText: string
}
export type PostsArrType = {
    id: number
    message: string
    count: number
}

//Navbar > Friends
export type FriendsArrType = {
    id: string, avatar: string, name: string
}


export type DispatchType = (action: ActionTypes) => void;
export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>|ReturnType<typeof addNewMessageAC>


// type AddPostACType = {type: 'ADD-POST', text: string};
// type UpdateNewPostTextACType = {type: 'UPDATE-NEW-POST-TEXT', newText:string};


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
        if (action.type === 'ADD-POST') {
            const newPost: PostsArrType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                count: 0
            }
            this._state.profilePage.postsArr.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this.renderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this.renderEntireTree()
        } else if (action.type === 'NEW-MESSAGE') {
            // const newMessage = {text: message}
            // this._state.messagesPage.messageArr.unshift(newMessage)

        }
    }
}

export const addNewMessageAC = (message:string)=>({type:'NEW-MESSAGE', messageText:message}as const)
export const addPostAC = (text: string) => ({type: 'ADD-POST', text: text} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default store
