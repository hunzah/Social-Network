import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {FriendsArrType} from '../redux/state';


type FriendsPropsType = {
    Friends: FriendsArrType[]
}

export const Navbar = (props:FriendsPropsType) => {
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
            {/*<div className={s.friends}>*/}
            {/*    <Friends Friends={state.friendsPage.Friends}/>*/}
            {/*</div>*/}
            <div>
                <div className={s.friends}>
                    {props.Friends.map(item => {
                        return (
                            <div className={s.friendItem} key={item.id}>
                                <img  src={item.avatar} alt='avatars'/>
                                <div className={s.name} >
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </nav>
    )
}