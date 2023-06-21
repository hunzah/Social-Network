import {AddPostAC, ProfilePageType, profileReducer} from './profile-reducer';
import {authReducer, DataType, SetUserDataAC} from './auth-reducer';

test('new-post should be added', () => {

    const state: DataType = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        isLoading: true
    }

    const action = SetUserDataAC('1', 'email', 'login', true)
    const result = authReducer(state, action)
    expect(result.id).toBe('1')
    expect(result.email).toBe('email')
})