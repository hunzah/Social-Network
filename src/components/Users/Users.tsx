import s from './users.module.css';
import React from 'react';
import defaultPhoto from './../../assets/img/default avatar.png'
import {UsersArrType} from '../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {usersApi} from '../../api/api';

type PropsType = {
    users: UsersArrType[]
    onPageChanged: (p: number) => void
    unFollowHandler: (u: number) => void
    followHandler: (u: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    toggleFollowingInProgress: (following: boolean) => void
    followingInProgress: boolean
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p =>
                <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                      onClick={() => props.onPageChanged(p)}>
                        {p}
                    </span>)}
        </div>
        {props.users.map(u => (
            <div key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <img alt={'profile'} src={u.photos.small !== null ? u.photos.small : defaultPhoto}
                         className={s.avatar}
                    /></NavLink>

                {u.followed ?

                    (<button onClick={() => {
                        props.toggleFollowingInProgress(true)
                        usersApi.followUsers(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.unFollowHandler(u.id)
                                }
                                props.toggleFollowingInProgress(false)
                            })
                    }}
                             disabled={props.followingInProgress}
                    >unfollow</button>)
                    :
                    (<button onClick={() => {
                        props.toggleFollowingInProgress(true)
                        usersApi.UnfollowUsers(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.followHandler(u.id)
                                }
                                props.toggleFollowingInProgress(false)

                            })
                    }}
                             disabled={props.followingInProgress}
                    >follow</button>)
                }
                <div>{u.name}</div>
                <div>{u.city}</div>
            </div>
        ))}
    </div>
}
