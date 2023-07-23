import React from 'react';
// @ts-ignore
import s from './Header.module.scss';
// @ts-ignore
import b from './../../common/components/button.module.scss';
import {NavLink} from 'react-router-dom';
// @ts-ignore
import logo from './../../assets/img/logo-mini.svg';

type PropsType = {
    isAuth: boolean | undefined
    userId: number | null
    email: string | null
    name: string | undefined
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
                    <div className={s.nameAndButton}>
                        <span>{props.name}</span>
                        <button className={`${b.button} ${s.button}`} onClick={onclickHandler}>Log Out</button>
                    </div>
                    :
                    (<NavLink to={'/Login'}>log in</NavLink>)
                }
            </div>
        </header>
    )
}