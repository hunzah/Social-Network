import React from 'react';
// @ts-ignore
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom';


export const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Friends" activeClassName={s.active}>Friends</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Users" activeClassName={s.active}>Users</NavLink>
            </div>

            <div className={s.friends}>
                {/*<Friends store={props.store}/>*/}
            </div>

        </nav>
    )
}