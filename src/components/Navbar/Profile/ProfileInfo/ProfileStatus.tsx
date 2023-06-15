import React from 'react';


type PropsType = {
    value: string
    status:string
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
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
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.value} />
                    </div>
                }
            </div>
        );
    }
}

