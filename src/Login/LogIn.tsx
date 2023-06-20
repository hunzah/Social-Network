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
    const onSubmit = (formData: LogInFormType) => {
        const {email, password, rememberMe} = formData
        props.logInUser(email, password, rememberMe);
    };

    if (props.isAuth) {
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
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder="email" name="email" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} placeholder="Password" name="password" type="password" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type="checkbox" name="remember me"/>
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Submit</button>
            </div>
        </form>)
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