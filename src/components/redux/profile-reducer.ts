import {ActionTypes} from './redux-store';

export type ProfilePageType = {
    postsArr: PostsArrType[]
    newPostText: string
    profile:any
}
export type PostsArrType = {
    id: number
    message: string
    count: number
}
export type ProfileType = {
    profile: {
        "aboutMe": string | undefined,
        "contacts": {
            "facebook": string | undefined,
            "website": string | undefined,
            "vk": string | undefined,
            "twitter": string | undefined,
            "instagram": string | undefined,
            "youtube": string | undefined,
            "github": string | undefined,
            "mainLink": string | undefined
        },
        "lookingForAJob": boolean,
        "lookingForAJobDescription": string | undefined,
        "fullName": string | undefined,
        "userId": number,
        "photos": {
            "small": string | undefined,
            "large": string | undefined
        }
    } | null
}

const initialState = {
    postsArr: [
        {id: 1, message: 'Hi, how are you?', count: 15},
        {id: 2, message: 'It\'s my first post', count: 16},
    ],
    newPostText: '',
    profile:null
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
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
};

export const addPostAC = (text: string) => ({type: 'ADD-POST', text: text} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)
export const setUserProfile = (profile:ProfileType) => ({type: 'SET-USER-PROFILE',profile:profile} as const)

export default profileReducer;