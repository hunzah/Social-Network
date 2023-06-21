import {authReducer, DataType, SetLoadingAC, SetUserDataAC} from './auth-reducer';

test('new-user-data should be added', () => {

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
test('LoadingAC should be set', () => {

    const state: DataType = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        isLoading: true
    }

    const action = SetLoadingAC(true)
    const result = authReducer(state, action)
    expect(result.isLoading).toBe(true)

})
