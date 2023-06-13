import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean | undefined
    userId: string | null
    email: string | null
    login: string | null
}
export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img className={s.header} alt={'logotype'}
                 src="https://vowels.ae/blog/wp-content/uploads/2022/07/best-ideas-for-tech-logo-design.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    (<NavLink to={'/Login'}>log in</NavLink>)
                }
            </div>
        </header>
    )
}