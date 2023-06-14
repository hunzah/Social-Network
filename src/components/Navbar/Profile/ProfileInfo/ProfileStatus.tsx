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
    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.editMode}>Ле ватайди! бля</span>
                    </div>
                    :
                    <div>
                        <input value={this.props.value}/>
                    </div>
                }
            </div>
        );
    }
}

