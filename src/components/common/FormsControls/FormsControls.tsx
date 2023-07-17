import s from './FormControls.module.css';
// @ts-ignore
import i from './../../../common/components/input.module.scss';
// @ts-ignore
import t from './../../../common/components/textArea.module.scss';

const FormControl = ({input, meta, child, element, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? `${s.formControl} ${s.error}` : `${s.formControl}`}>
            <div>
                {props.children}
            </div>
            {hasError && <div>{meta.error}</div>}
        </div>
    )
}
export const TextArea = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <div className={t.textArea}>
            <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
        </div>
    )
}


export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <div className={i.input}>
            <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
        </div>
    )
}