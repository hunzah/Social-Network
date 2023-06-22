import React from 'react';


type PropsType = {
    value: string
    status: string
    updateStatus: (userId: string) => void
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
            <div>
                {!this.state.editMode ?
                    <div>
                        <span
                            onDoubleClick={this.editMode}>{!this.props.status ? 'No status' : this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}
                               onChange={this.onStatusChanged}/>
                    </div>
                }
            </div>
        );
    }
}

