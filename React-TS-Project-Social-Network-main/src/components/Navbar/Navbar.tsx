import React from 'react';
// @ts-ignore
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom';
// @ts-ignore
import profilePhoto from './../../assets/img/nav imgs/profile-circle-svgrepo-com.svg';
// @ts-ignore
import messagePhoto from './../../assets/img/nav imgs/message-2-pending-svgrepo-com.svg';
// @ts-ignore
import settingsPhoto from './../../assets/img/nav imgs/settings-svgrepo-com.svg';
// @ts-ignore
import usersPhoto from './../../assets/img/nav imgs/users-group-two-rounded-svgrepo-com.svg';


export const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}>

                <NavLink to="/Profile" activeClassName={s.active}>
                    <img src={profilePhoto}/>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>

                <NavLink to="/Messages" activeClassName={s.active}>
                    <img src={messagePhoto}/>Messages</NavLink>
            </div>
            <div className={s.item}>

                <NavLink to="/Users" activeClassName={s.active}>
                    <img src={usersPhoto}/>
                    Users</NavLink>
            </div>
            <div className={s.item}>

                <NavLink to="/Settings" activeClassName={s.active}>
                    <img src={settingsPhoto}/>Settings</NavLink>
            </div>
        </nav>
    )
}