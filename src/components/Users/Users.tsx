import s from './users.module.css';
import React from 'react';
import defaultPhoto from './../../assets/img/default avatar.png'
import {UsersArrType} from '../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type PropsType = {
    users: UsersArrType[]
    onPageChanged: (p: number) => void
    unFollowHandler: (u: number) => void
    followHandler: (u: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
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
                    (<button onClick={() =>
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true})
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unFollowHandler(u.id)
                                }
                            })}
                    >unfollow</button>)
                    :
                    (<button onClick={() =>
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {'API-KEY': '6d618c5c-24f1-48e7-9694-a9a2e7863199'}
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.followHandler(u.id)
                                }
                            })}
                    >follow</button>)
                }
                <div>{u.name}</div>
                <div>{u.city}</div>
            </div>
        ))}
    </div>
}
