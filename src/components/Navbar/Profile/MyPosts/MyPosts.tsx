import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../redux/store';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, required} from '../../../../utilits/validators';
import {TextArea} from '../../../common/FormsControls/FormsControls';

type FormValueType = {
    newPostText: string
}


type MyPostsPropsType = {
    onAddPost: (newPostText: string) => void
    profilePage: ProfilePageType
}


export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.profilePage.postsArr.map(item => <Post key={item.id} message={item.message}
                                                                      count={item.count}/>)

    const handleAddPost = (value: FormValueType) => {
        // alert(value.newPost)
        props.onAddPost(value.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <ReduxMyPostForm onSubmit={handleAddPost}/>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}
const MyPostForm = (props: InjectedFormProps<FormValueType>) => {
// let maxLength15 =maxLength(15)
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                   name="newPostText"
                   validate={[required]}
            />
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}

const ReduxMyPostForm = reduxForm<FormValueType>({
    form: 'ProfileAddNewPostForm'
})(MyPostForm)