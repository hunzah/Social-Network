import {ActionTypes, PostsArrType, ProfilePageType,} from './state';


const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
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

export default profileReducer