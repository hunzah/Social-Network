import React, {PropsWithChildren} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {logInUserThunk} from '../components/redux/auth-reducer';
import {LogInFormType} from '../api/api';



export const LogIn = (props:any) => {
    const onSubmit = (formData: LogInFormType) => {
        props.logInUser(formData);
    };

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};


const LoginForm = (props:PropsWithChildren<InjectedFormProps<{}, {}, string>>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" placeholder="Login" name="login"/>
            </div>
            <div>
                <Field component="input" placeholder="Password" name="password"/>
            </div>
            <div>
                <Field component="input" type="checkbox" name="remember me"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>)
}

type mapDispatchToPropsType = {
    logInUser:(logInForm: any)=>void
}

const mapDispatchToProps:mapDispatchToPropsType = {
    logInUser:logInUserThunk
}

type FormProps = {
    onSubmit: (formData: any) => void;
};

type Props = FormProps & InjectedFormProps<{}, FormProps>;

const LoginReduxForm = compose<React.ComponentType<Props>>(
    connect(null, mapDispatchToProps),
    reduxForm({ form: "login" })
)(LoginForm);