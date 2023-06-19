import React, {PropsWithChildren} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {logInUserThunk} from '../components/redux/auth-reducer';
import {LogInFormType} from '../api/api';
import {Input} from '../components/common/FormsControls/FormsControls';
import {required} from '../utilits/validators';

export const LogIn = (props: any) => {
    const onSubmit = (formData: LogInFormType) => {
        props.logInUser(formData);
    };

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props: PropsWithChildren<InjectedFormProps<{}, {}, string>>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder="Login" name="login" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} placeholder="Password" name="password" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type="checkbox" name="remember me"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>)
}

type mapDispatchToPropsType = {
    logInUser: (logInForm: any) => void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    logInUser: logInUserThunk
}

type FormPropsType = {
    onSubmit: (formData: any) => void;
};

type Props = FormPropsType & InjectedFormProps<{}, FormPropsType>;

const LoginReduxForm = compose<React.ComponentType<any>>(
    connect(null, mapDispatchToProps),
    reduxForm({form: 'login'})
)(LoginForm);