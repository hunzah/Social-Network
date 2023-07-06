import axios from 'axios';
import {DataType} from '../components/redux/auth-reducer';
import {ProfileType} from '../components/redux/profile-reducer';
import {UsersResponseType} from '../components/redux/users-reducer';


type AllResponsesType<T> = {
    resultCode: number,
    messages: string[],
    data: T
}


//authApi types
export type LogInFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '6d618c5c-24f1-48e7-9694-a9a2e7863199'
    }
})


export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },
    followUsers(id: number) {
        return instance.delete<AllResponsesType<{}>>(`follow/${id}`).then((response) => response.data)
    },
    unfollowUsers(id: number) {
        return instance.post<AllResponsesType<{}>>(`follow/${id}`).then((response) => response.data)

    },
}

export const authApi = {
    me() {
        return instance.get<AllResponsesType<DataType>>(`auth/me`).then((response) => response.data)
    },
    logIn(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<AllResponsesType<{ userId: number }>>(`auth/login`, {
            email,
            password,
            rememberMe
        }).then(response => response.data)
    },
    logOut() {
        return instance.delete<AllResponsesType<{}>>(`auth/login`)
    }
}


export const profileApi = {

    getProfiles(userId: string | null) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then((response) => response.data)
    },

    getStatus(userId: string | null) {
        return instance.get<string>(`profile/status/${userId}`).then((response) => response.data)
    },

    updateStatus(status: string) {
        return instance.put<AllResponsesType<{}>>(`profile/status`, {status: status}).then((response) => response.data)
    },
    savePhoto(photoFile: string) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<AllResponsesType<{ small: string | null, large: string | null }>>
        (`profile/photo`, formData, {
            headers: {
                'Content-Type': ' multipart/form-data'
            }
        }).then((response) => response.data)
    }
}
