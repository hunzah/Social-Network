import React from 'react';
import {MapDispatchType, MapStateType} from './UsersContainer';
import axios from 'axios';
import {Users} from './Users';

type UsersPropsType = MapStateType & MapDispatchType

export class UsersApi extends React.Component<UsersPropsType> {

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
        return <Users onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize} currentPage={this.props.currentPage} followHandler={this.props.followHandler}
                      unFollowHandler={this.props.unFollowHandler} users={this.props.users}/>
    }
}