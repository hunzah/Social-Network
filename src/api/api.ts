import axios from 'axios';
import {DataType, ResponseDataType} from '../components/redux/auth-reducer';
import {ProfileType} from '../components/redux/profile-reducer';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '6d618c5c-24f1-48e7-9694-a9a2e7863199'
    }
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },
    followUsers(id: number) {
        return instance.delete(`follow/${id}`).then((response) => response.data)
    },
    UnfollowUsers(id: number) {
        return instance.post(`follow/${id}`).then((response) => response.data )

    },

    getProfiles(userId:string){
        return instance.get<ProfileType>(`profile/${userId}`).then((response)=> response.data)
    }

}
export const authApi = {
    me() { return instance.get<ResponseDataType<DataType>>(`auth/me`).then((response) => response.data)}
}

