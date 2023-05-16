import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string,
    count: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://uprostim.com/wp-content/uploads/2021/02/image100-30.jpg"/>
            <div>{props.message}</div>
            <span>likes: </span>
            {props.count}
        </div>
    )
}
