import {ActionTypes, PostsArrType, ProfilePageType,} from './state';


const profileReducer = (state:ProfilePageType, action:ActionTypes) => {
    if (action.type === 'ADD-POST') {
        const newPost: PostsArrType = {
            id: 3,
            message: state.newPostText,
            count: 0
        }
        state.postsArr.unshift(newPost)
        state.newPostText = ''

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText

    }
    return state
};

export default profileReducer