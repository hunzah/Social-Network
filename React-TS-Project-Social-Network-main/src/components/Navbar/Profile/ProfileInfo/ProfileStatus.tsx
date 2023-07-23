import React from 'react';
// @ts-ignore
import s from './ProfileInfo.module.scss'

type PropsType = {
    value: string
    status: string
    updateStatus: (userId: string) => void
    isOwner: boolean
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    editMode = () => {
        this.setState({
            editMode: true
        });
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChanged = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })

        }
    }
    render() {
        return (
            <div className={s.status }>
                <h3 style={{color:'white'}}>Status</h3>
                {this.props.isOwner ?
                    <div>
                        {!this.state.editMode ?
                            <span onDoubleClick={this.editMode}>{this.props.status || 'No status'}</span>
                            :
                            <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}
                                   onChange={this.onStatusChanged}/>
                        }
                    </div>
                    :
                    <div>
                        <span>{this.props.status || 'No status'}</span>
                    </div>
                }
            </div>
        );
    }
}

