import {v1} from 'uuid';



export type StoreType = {
    _state:StateType
    getState:()=>StateType
    renderEntireTree:()=>void
    updateNewPostText: (newText:string) => void
    subscribe:(callback:()=>void)=>void
    addPost:() =>void
    dispatch:(action:any)=>void
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
    newPostText:string
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






export const store:StoreType = {
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
},
    getState(){
         return this._state
    },
    renderEntireTree() {
        console.log('state changed')
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this.renderEntireTree()
},
    subscribe (callback) {
        this.renderEntireTree=callback
    },
    addPost () {
        const newPost: PostsArrType = {
            id: 3,
            message: this._state.profilePage.newPostText,
            count: 0
        }
        this._state.profilePage.postsArr.unshift(newPost)
        this._state.profilePage.newPostText = ''

        this.renderEntireTree()
    },
    dispatch (action){
         if (action === 'ADD-POST'){
             const newPost: PostsArrType = {
             id: 3,
             message: this._state.profilePage.newPostText,
             count: 0
         }
             this._state.profilePage.postsArr.unshift(newPost)
             this._state.profilePage.newPostText = ''
             this.renderEntireTree()}
    }
}






export default store
