import React from 'react';


type PropsType = {
    value: string
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
                        <span onDoubleClick={this.editMode}>Ле ватайди! бля</span>
                    </div>
                    :
                    <div>
                        <input onBlur={this.deActivateEditMode} value={this.props.value} />
                    </div>
                }
            </div>
        );
    }
}

