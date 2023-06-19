import React, {PropsWithChildren} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {logInUserThunk} from '../components/redux/auth-reducer';
import {LogInFormType} from '../api/api';
import {Input} from '../components/common/FormsControls/FormsControls';
import {required} from '../utilits/validators';



const LogIn = (props: logInUserType) => {
    const onSubmit = (formData: LogInFormType) => {
        const {email, password, rememberMe} = formData
        props.logInUser(email, password, rememberMe);
    };

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
            <div>
                <button>Submit</button>
            </div>
        </form>)
}

type logInUserType = {
    logInUser: (email: string, password: string, rememberMe: boolean) => void
}

const mapDispatchToProps: logInUserType = {
    logInUser: logInUserThunk
}


const LoginReduxForm = reduxForm<any>({form: 'login'})(LoginForm)


export  default  connect(null,mapDispatchToProps)(LogIn)