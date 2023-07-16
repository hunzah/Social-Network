import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
// @ts-ignore
import logo from './../../assets/img/logo-mini.svg';

type PropsType = {
    isAuth: boolean | undefined
    userId: number | null
    email: string | null
    login: string | null
    handleLogOut: ()=>void
}
export const Header = (props: PropsType) => {
    function onclickHandler() {
        props.handleLogOut()
    }
    
    return (
        <header className={s.header}>
            <img className={s.header} alt={'logotype'}
                 src={logo}/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>
                        <span>{props.login}</span>
                        <button onClick={onclickHandler}>Log Out</button>
                    </div>
                    :
                    (<NavLink to={'/Login'}>log in</NavLink>)
                }
            </div>
        </header>
    )
}