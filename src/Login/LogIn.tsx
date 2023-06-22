import React, {PropsWithChildren} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {logInUserThunk} from '../components/redux/auth-reducer';
import {LogInFormType} from '../api/api';
import {Input} from '../components/common/FormsControls/FormsControls';
import {required} from '../utilits/validators';
import {Redirect} from 'react-router-dom';
import {AppReduxStateType} from '../components/redux/redux-store';
import s from '../components/common/FormsControls/FormControls.module.css'

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
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props: PropsWithChildren<InjectedFormProps<any>>) => {
    const {handleSubmit, error} = props
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'email', 'email', '', [required])}
            {createField(Input, 'Password', 'password', 'password', [required])}

            <div>
                {createField(Input, '', 'remember me', 'checkbox')}
                <span>Remember me</span>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Submit</button>
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