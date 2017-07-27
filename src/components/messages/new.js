import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import { createMessage } from '../../actions/messages';

import './messages.css';

class MessagesNew extends Component {

    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);

        this.state = {
            message: '',
            isPublic: false,
            errors: {}
        };
    }

    validate() {
        let errors = {};

        if (this.state.message === '') {
            errors.message = "Champs requis";
        }
        this.setState({errors: errors});
        return errors;
    }

    onSubmit(e) {
        e.preventDefault();
        const errors = this.validate();
        if (JSON.stringify(errors) !== JSON.stringify({})) {
            console.log('stop');
            return false;
        }
        this.props.createMessage(this.state);
        this.setState({message: '', isPublic: false});
    }

    handleMessage(e, value) {
        this.validate();
        this.setState({message: value});
    }

    handlePublic(e, value) {
        this.setState({isPublic: value});
    }

    render() {
        return (
            <div className="App-form">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <TextField
                            errorText={(this.state.errors && this.state.errors.message) || ''}
                            floatingLabelText="Message"
                            floatingLabelFixed={true}
                            fullWidth={true}
                            onChange={this.handleMessage.bind(this)}
                            value={this.state.message}
                        />
                    </div>
                    <div>
                        <Checkbox
                            label="Message public"
                            checked={this.state.isPublic}
                            onCheck={this.handlePublic.bind(this)}
                        />
                    </div>
                    <div className="text-right">
                        <RaisedButton label="Envoyer" primary={true} containerElement={<button type='submit'></button>}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { createMessage })(MessagesNew);
