import React from 'react';
import {NavLink} from 'react-router-dom';
import defaultPhoto from '../../../assets/img/default avatar.png';
import s from '../users.module.css';
import {UsersArrType} from '../../redux/users-reducer';

type PropsType = {
    user: UsersArrType
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
    followingInProgress: number[]
}
export const User = (props: PropsType) => {
    const {user, followThunk, unFollowThunk, followingInProgress} = props
    console.log('User - user.followed: ', user.followed);
    return (
        <div className={s['user-card']} key={user.id}>
            <NavLink to={'/profile/' + user.id}>
                <img
                    alt={'profile'}
                    src={user.photos.small !== null ? user.photos.small : defaultPhoto}
                    className={s.avatar}
                />
            </NavLink>
            <div className={s['user-name']}>{user.name}</div>
            <div className={s['user-city']}>{user.city}</div>
            {user.followed ? (
                <button
                    onClick={() => {
                        unFollowThunk(user.id);
                    }}
                    disabled={followingInProgress.some((id) => id === user.id)}
                >
                    unfollow
                </button>
            ) : (
                <button
                    onClick={() => {
                        followThunk(user.id);
                    }}
                    disabled={followingInProgress.some((id) => id === user.id)}
                >
                    follow
                </button>
            )}
        </div>
    );

};
