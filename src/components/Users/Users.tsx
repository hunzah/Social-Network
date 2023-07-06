import React from 'react';
import {UsersArrType} from '../redux/users-reducer';
import {Paginator} from '../common/paginator/paginator';
import {User} from './User/Users';

type PropsType = {
    users: UsersArrType[]
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
    followingInProgress: number[]
}

export const Users = (props: PropsType) => {

    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
        {props.users.map(u => <User key={u.id} user={u} followThunk={props.followThunk}
                                    unFollowThunk={props.unFollowThunk}
                                    followingInProgress={props.followingInProgress}/>
        )}
    </div>
}
