import {ActionTypes, DispatchType} from './redux-store';
import {profileApi} from '../../api/api';

export type ProfilePageType = {
    postsArr: PostsArrType[]
    newPostText: string
    profile: ProfileType | null
    status: string
}
export type PostsArrType = {
    id: number
    message: string
    count: number
}

export type ProfileType = {
    'aboutMe': string | null,
    'contacts': ContactType,
    'lookingForAJob': boolean,
    'lookingForAJobDescription': string | undefined,
    'fullName': string | undefined,
    'userId': number,
    'photos': {
        'small': string | undefined,
        'large': string | undefined
    }
}
export type ContactType = {
    facebook?: string | null;
    website?: string | null;
    vk?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    youtube?: string | null;
    github?: string | null;
    mainLink?: string | null
}


const initialState:ProfilePageType = {
    postsArr: [
        {id: 1, message: 'Hi, how are you?', count: 15},
        {id: 2, message: 'It\'s my first post', count: 16},
    ],
    newPostText: '',
    profile: null,
    status: ''
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsArrType = {
                id: state.postsArr.length + 1,
                message: action.newPostText,
                count: 0,
            };
            return {
                ...state,
                postsArr: [newPost, ...state.postsArr],
            };
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
};

export const AddPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText: newPostText} as const)
export const SetUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile: profile} as const)
export const SetStatusAC = (status: string) => ({type: 'SET-STATUS', status: status} as const)

export const setProfileThunkCreator = (userId: string) => {
    return (dispatch: DispatchType) => {
        profileApi.getProfiles(userId)
            .then(data => {
                dispatch(SetUserProfile(data));
            });
    }
}
export const getStatusThunkCreator = (userId: string)=> {
    return (dispatch: DispatchType) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(SetStatusAC(response));
            });
    }
}

export const updateStatusThunkCreator = (status: string)=> {
    return (dispatch: DispatchType) => {
        profileApi.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch (SetStatusAC(status))
                }
            });
    }
}


export default profileReducer;
