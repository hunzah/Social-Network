import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';


type ProfilePropsType = {
    store: StoreType
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts profilePage={props.state.profilePage} dispatch={props.dispatch}/>*/}
            <MyPostsContainer store={props.store}/>
        </div>
    )
}


