import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
// @ts-ignore
import s from './Dialogs.module.scss';
// @ts-ignore
import b from './../../common/components/button.module.scss';
import {Message} from './Message/Message';
import {Dialog} from './DialogItem/Dialog';
import {MessagesPageType} from '../redux/store';
import {TextArea} from '../common/FormsControls/FormsControls';
import {maxLength, required} from '../../utilits/validators';

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
                {props.messagesPage.dialogsArr.map((item, id) => (
                    <Dialog key={id} path={item.path} name={item.name} />
                ))}
            </div>
            <div className={s.messages}>
                {props.messagesPage.messageArr.map((item, id) => (
                    <Message key={id} text={item.message} name={props.messagesPage.dialogsArr[id].name} />
                ))}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );

};
const AddMessageForm = (props: InjectedFormProps<FormValues>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={TextArea}
                name="newMessageBody"
                placeholder="enter your message"
            />
            <button disabled={props.form.length>1} className={b.button} type="submit">Send</button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm<FormValues>({
    form: 'addMessageForm',
})(AddMessageForm);