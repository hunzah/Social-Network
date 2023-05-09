import {ActionTypes, PostsArrType, ProfilePageType,} from './store';

const initialState =  {
    postsArr: [
        {id: 1, message: 'Hi, how are you?', count: 15},
        {id: 2, message: 'It\'s my first post', count: 16},
    ],
        newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsArrType = {
                id: 3,
                message: state.newPostText,
                count: 0
            }
            state.postsArr.unshift(newPost)
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
};

export const addPostAC = (text: string) => ({type: 'ADD-POST', text: text} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default profileReducer