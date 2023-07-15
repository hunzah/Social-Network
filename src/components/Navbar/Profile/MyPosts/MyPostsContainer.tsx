import React from 'react';
import {AddPostAC, ProfilePageType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';


type mapStateToPropsType = {
    profilePage: ProfilePageType
    avatar: File

}
type mapDispatchToPropsType = {
    onAddPost: (newPostText: string) => void
}
const mapStateToProps = (state: mapStateToPropsType) => {
    return ({
        profilePage: state.profilePage,
        avatar: state.profilePage.profile?.photos?.large
    })

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddPost: (newPostText: string) => {
            dispatch(AddPostAC(newPostText));
        }
    };
};


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)