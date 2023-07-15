import {ActionTypes, AppThunk, DispatchType, RootState} from './redux-store';
import {profileApi, UpdatedProfileType} from '../../api/api';

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
    'aboutMe'?: string | null,
    'contacts'?: ContactType,
    'lookingForAJob'?: boolean | null,
    'lookingForAJobDescription'?: string | undefined,
    'fullName'?: string | undefined,
    'userId'?: number | null,
    'photos'?: {
        'small'?: File | undefined,
        'large'?: File | undefined
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
} | undefined


const initialState: ProfilePageType = {
    postsArr: [
        {id: 1, message: 'Hi, how are you?', count: 15},
        {id: 2, message: 'It\'s my first post', count: 16},
    ],
    newPostText: '',
    profile: {
        aboutMe: null,
        contacts: undefined,
        lookingForAJob: null,
        lookingForAJobDescription: undefined,
        fullName: undefined,
        userId: null,
        photos: {
            small: undefined,
            large: undefined
        }
    },
    status: '',

}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case 'profile/ADD-POST':
            const newPost: PostsArrType = {
                id: state.postsArr.length + 1,
                message: action.newPostText,
                count: 0,
            };
            return {
                ...state,
                postsArr: [newPost, ...state.postsArr],
            };
        case 'profile/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'profile/SET-STATUS':
            return {...state, status: action.status}
        case 'profile/SAVE-PHOTO':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        ...state.profile?.photos,
                        large: action.newPhoto
                    }
                }
            }
        default:
            return state
    }
};

export const AddPostAC = (newPostText: string) => ({type: 'profile/ADD-POST', newPostText} as const);
export const SetUserProfileAC = (profile: ProfileType) => ({
    type: 'profile/SET-USER-PROFILE',
    profile: profile
} as const)
export const SetStatusAC = (status: string) => ({type: 'profile/SET-STATUS', status: status} as const)
export const SavePhotoAC = (file: File) => ({type: 'profile/SAVE-PHOTO', newPhoto: file} as const)


export const setProfileThunkCreator = (userId: number | null): AppThunk => {
    debugger
    return async (dispatch: DispatchType) => {
        debugger
        let response = await profileApi.getProfiles(userId)
        await dispatch(SetUserProfileAC(response));

    }
}

export const getStatusThunkCreator = (userId: number | null): AppThunk => {
    return async (dispatch: DispatchType) => {
        const response = await profileApi.getStatus(userId)
        await dispatch(SetStatusAC(response));

    }
}

export const updateStatusThunkCreator = (status: string): AppThunk => {
    return async (dispatch: DispatchType) => {
        let response = await profileApi.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(SetStatusAC(status))
        }

    }
}

export const savePhotoThunkCreator = (file: File): AppThunk => {
    return async (dispatch: DispatchType) => {
        let response = await profileApi.savePhoto(file)
        if (response.resultCode === 0) {
            dispatch(SavePhotoAC(response.data.photos.large))
        }

    }
}

export const updateProfileThunkCreator = (profile: UpdatedProfileType): AppThunk => {
    return async (dispatch: DispatchType, getState: () => RootState) => {
        const state = getState().profilePage.profile
        debugger
        const updatedProfile: UpdatedProfileType = {
            userId: state?.userId,
            lookingForAJob: state?.lookingForAJob,
            lookingForAJobDescription: state?.lookingForAJobDescription,
            fullName: state?.fullName,
            contacts: Object.assign({}, state?.contacts, profile.contacts),

        };
        console.log(updatedProfile)
        let response = await profileApi.updateProfile(updatedProfile)
        if (response.resultCode === 0) {
            dispatch(SetUserProfileAC(response.data))
        }
    }
}

export default profileReducer;
