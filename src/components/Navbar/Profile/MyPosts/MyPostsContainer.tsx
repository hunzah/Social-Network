import React from 'react';
import {AddPostAC, ProfilePageType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';


type mapStateToPropsType = {
    profilePage: ProfilePageType
}
type mapDispatchToPropsType = {
    onAddPost: (newPostText:string)=>void
}
const mapStateToProps = (state: mapStateToPropsType) => {
    return ({
        profilePage: state.profilePage
    })

}
const mapDispatchToProps = ():mapDispatchToPropsType=> {
    return ({
        onAddPost: AddPostAC
    })
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)