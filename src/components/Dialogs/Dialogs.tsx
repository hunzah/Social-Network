import React, {ChangeEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {MessagesPageType} from '../redux/store';

type FormValues = {
    newMessageBody: string;
};

type DialogsPropsType = {
    AddMessageHandler: (value: string) => void;
    messagesPage: MessagesPageType;
};

export const Dialogs = (props: DialogsPropsType) => {
    const addNewMessage = (values: FormValues) => {
        props.AddMessageHandler(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.messagesPage.dialogsArr.map((item, id) => {
                    return <Dialog key={id} path={item.path} name={item.name}/>;
                })}
            </div>
            <div className={s.messages}>
                {props.messagesPage.messageArr.map((item, id) => {
                    return <Message key={id} text={item.message}/>;
                })}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};
const AddMessageForm = (props: InjectedFormProps<FormValues>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component="textarea"
                name="newMessageBody"
                placeholder="enter your message"
            />
            <button type="submit">Send</button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm<FormValues>({
    form: 'addMessageForm',
})(AddMessageForm);