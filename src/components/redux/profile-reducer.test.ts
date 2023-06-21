import {
    AddPostAC,
    ProfilePageType,
    profileReducer,
    ProfileType,
    SetStatusAC,
    SetUserProfileAC
} from './profile-reducer';

test('new-post should be added', () => {

    const state: ProfilePageType = {
        postsArr: [
            {id: 1, message: 'Hi, how are you?', count: 15},
            {id: 2, message: 'It\'s my first post', count: 16},
        ],
        newPostText: '',
        profile: null,
        status: ''
    }

    const action = AddPostAC('post was added')
    const result = profileReducer(state, action)
    expect(result.postsArr.length).toBe(3)
    expect(result.postsArr[0].count).toBe(0)
    expect(result.postsArr[0].message).toBe('post was added')

})

test('new profile should be added', () => {

    const state: ProfilePageType = {
        postsArr: [
            {id: 1, message: 'Hi, how are you?', count: 15},
            {id: 2, message: 'It\'s my first post', count: 16},
        ],
        newPostText: '',
        profile: null,
        status: ''
    }
    const newProfile:ProfileType = {
    aboutMe: 'aboutMe',
        contacts: {
        facebook : 'http/facebook.com'
        },
        lookingForAJob:false,
        lookingForAJobDescription:'lookingForAJobDescription',
        fullName :'fullName',
        userId:5,
        photos : {
            small:'small',
            large:'large'
    }
}
    const action = SetUserProfileAC(newProfile)
    const result = profileReducer(state, action)
    expect(result.profile).toEqual(newProfile)
    expect(result.profile?.aboutMe).toBe('aboutMe')
})
test('new status should be added', () => {

    const state: ProfilePageType = {
        postsArr: [
            {id: 1, message: 'Hi, how are you?', count: 15},
            {id: 2, message: 'It\'s my first post', count: 16},
        ],
        newPostText: '',
        profile: null,
        status: ''
    }


    const action = SetStatusAC('new status was added')
    const result = profileReducer(state, action)
    expect(result.status).toBe('new status was added')
})

