import {ActionTypes} from './redux-store';


export type ProfilePageType = {
    postsArr: PostsArrType[]
    newPostText: string
}
export type PostsArrType = {
    id: number
    message: string
    count: number
}


const initialState = {
    postsArr: [
        {id: 1, message: 'Hi, how are you?', count: 15},
        {id: 2, message: 'It\'s my first post', count: 16},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsArrType = {
                id: 3,
                message: state.newPostText,
                count: 0
            }
            state.newPostText = ''
            return {...state, postsArr: [newPost,...state.postsArr]};

        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText};
        default:
            return state
    }
};

export const addPostAC = (text: string) => ({type: 'ADD-POST', text: text} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default profileReducer