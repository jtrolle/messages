import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/messages';

import './messages.css';

class MessagesIndex extends Component {

    componentWillMount() {
        this.props.fetchMessages();
    }

    renderIndex() {
        if (this.props.messages) {

            return this.props.messages.map((message) => {
                return (
                    <div className="message" key={message.id}>
                        <div className="message-mode">{message.isPublic ? 'Message public' : 'Message privé' }</div>
                        {message.body}
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div>
                {this.renderIndex()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

export default connect(mapStateToProps, { fetchMessages })(MessagesIndex);