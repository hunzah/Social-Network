import React from 'react';
import s from './Post.module.css'
import defaultPhoto from '../../../../../assets/img/default avatar.png'

type PostType = {
    message: string,
    count: number
    avatar:File | undefined
}

export const Post = (props: PostType) => {

    return (
        <div className={s.item}>
            <img src={props.avatar? props.avatar.toString() : defaultPhoto}/>
            <div>{props.message}</div>
            <span>likes: </span>
            {props.count}
        </div>
    )
}
