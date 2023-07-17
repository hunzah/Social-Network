import React, {PropsWithChildren} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {logInUserThunk} from '../components/redux/auth-reducer';
import {LogInFormType} from '../api/api';
import {Input} from '../components/common/FormsControls/FormsControls';
import {required} from '../utilits/validators';
import {Redirect} from 'react-router-dom';
import {AppReduxStateType} from '../components/redux/redux-store';
import f from '../components/common/FormsControls/FormControls.module.css'
// @ts-ignore
import s from './login.module.scss'
// @ts-ignore
import b from './../common/components/button.module.scss'

type logInUserPropsType = {
    logInUser: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const LogIn = (props: logInUserPropsType) => {

    const {logInUser, isAuth} = props

    const onSubmit = (formData: LogInFormType) => {
        const {email, password, rememberMe} = formData
        logInUser(email, password, rememberMe);
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.login}>
            <p>To log use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props: PropsWithChildren<InjectedFormProps<any>>) => {
    const {handleSubmit, error} = props
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            {createField(Input, 'email', 'email', '', [required])}
            {createField(Input, 'Password', 'password', 'password', [required])}
            <div className={s.rememberMe}>
                {createField(Input, '', 'remember me', 'checkbox')}
                <div>Remember me</div>
            </div>
            {error &&
                <div className={f.formSummaryError}>{error}</div>}
            <div>
                <button className={b.button}>Submit</button>
            </div>
        </form>)
}

const createField = (component: (props: any) => JSX.Element,
                     placeholder: string, name: string, type?: string,
                     validate?: ((value: string) => 'Field is required' | undefined)[]) => {
    return <div>
        <Field component={component} placeholder={placeholder} name={name} type={type} validate={validate}/>
    </div>
}

type mapDispatchToPropsType = {
    logInUser: (email: string, password: string, rememberMe: boolean) => void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    logInUser: logInUserThunk
}
type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppReduxStateType): mapStateToPropsType => {
    return {isAuth: state.auth.isAuth}
}

const LoginReduxForm = reduxForm<any>({form: 'login'})(LoginForm)


export default connect(mapStateToProps, mapDispatchToProps)(LogIn)