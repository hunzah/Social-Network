import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

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
                 src="https://vowels.ae/blog/wp-content/uploads/2022/07/best-ideas-for-tech-logo-design.jpg"/>
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