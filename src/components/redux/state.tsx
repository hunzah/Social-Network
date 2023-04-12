export type StateType = {
    messagesPage:
        {
            dialogsArr: DialogsArrType[]
            messageArr: MessageArrType[]
        }
    profilePage:
        { postsArr: PostsArrType[] }
}


export type DialogsArrType = {
    path: string
    name: string
}

export type MessageArrType = {
    text: string
}

export type PostsArrType = {
    message: string
    count: number
}


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
            {message: 'Hi, how fre you?', count: 15},
            {message: 'It\'s my first post', count: 16},
        ]
    }
}

export default state
