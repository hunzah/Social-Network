import React from 'react';
import s from './users.module.css'
import {MapDispatchType, MapStateType} from './UsersContainer';
import axios from 'axios';
// @ts-ignore
import defaultPhoto from './../../assets/img/img.png'

type UsersPropsType = MapStateType & MapDispatchType

class UsersApi extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged(p: number) {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response =>
            this.props.setUsers(response.data.items)
        )

    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <Users/>
            <div>
                <div>
                    {pages.map(p =>
                        <span className={this.props.currentPage === p ? s.selectedPage : ''}
                              onClick={() => this.onPageChanged(p)}>
                        {p}
                    </span>)}
                </div>
                {this.props.users.map(u => (
                    <div key={u.id}>
                        <img
                            alt={'profile'}
                            src={
                                u.photos.small !== null
                                    ? u.photos.small
                                    : defaultPhoto
                            }
                            className={s.avatar}
                        />
                        {u.followed ? (
                            <button onClick={() => this.props.followHandler(u.id)}>
                                follow
                            </button>
                        ) : (
                            <button onClick={() => this.props.unFollowHandler(u.id)}>
                                unfollow
                            </button>
                        )}
                        <div>{u.name}</div>
                        <div>{u.city}</div>
                    </div>
                ))}
            </div>
    }
}

export default UsersApi