import React from 'react';


type PropsType = {
    value: string
    status:string
    updateStatus:(userId:string)=> void
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status:this.props.status
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
    onStatusChanged = (e:any)=> {
e.currentTarget.value
    }
    render() {


        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.editMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
}

