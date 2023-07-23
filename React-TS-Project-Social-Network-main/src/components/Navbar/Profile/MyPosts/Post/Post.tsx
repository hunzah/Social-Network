import React from 'react';
// @ts-ignore
import s from './Post.module.scss'
import defaultPhoto from '../../../../../assets/img/default avatar.png'

type PropsType = {
    message: string,
    count: number
    avatar: File | undefined
    name: string | undefined
}

export const Post = (props: PropsType) => {
    const {avatar, message, name, count} = props
    return (
        <div className={s.postItem}>
            <div className={s.imgAndName}><img src={avatar ? avatar.toString() : defaultPhoto}/>
                <span>{name}</span></div>
            <div>{message}</div>
        </div>
    )
}
