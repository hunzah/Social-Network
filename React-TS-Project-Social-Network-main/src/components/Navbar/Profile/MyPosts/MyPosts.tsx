import React from 'react';
// @ts-ignore
import s from './MyPosts.module.scss'
// @ts-ignore
import b from './../../../../common/components/button.module.scss'
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../redux/store';
import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form';
import {required} from '../../../../utilits/validators';
import {TextArea} from '../../../common/FormsControls/FormsControls';

type FormValueType = {
    newPostText: string
}


type MyPostsPropsType = {
    onAddPost: (newPostText: string) => void
    profilePage: ProfilePageType
    avatar: File | undefined
    name: string | undefined
}


export const MyPosts = (props: MyPostsPropsType) => {
    const {avatar, onAddPost, profilePage, name} = props

    const postElements = profilePage.postsArr.map(item => <Post name={name} key={item.id} message={item.message}
                                                                count={item.count} avatar={avatar}/>)

    const handleAddPost = (value: FormValueType) => {
        onAddPost(value.newPostText)
    }

    return (
        <div className={s.myPostsContainer}>
            <div className={s.addPostForm}><h3 style={{color:'white'}}>Add new post</h3>
                <div>
                    <ReduxMyPostForm onSubmit={handleAddPost}/>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
const MyPostForm = (props: InjectedFormProps<FormValueType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                   name="newPostText"

            />
            <div>
                <button className={b.button} type="submit">publish</button>
            </div>
        </form>
    )
}

const ReduxMyPostForm = reduxForm<FormValueType>({
    form: 'ProfileAddNewPostForm',
    onSubmitSuccess: (result, dispatch) => {
        dispatch(reset('ProfileAddNewPostForm'));
    },
})(MyPostForm)