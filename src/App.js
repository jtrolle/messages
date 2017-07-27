import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/app_header';
import Messages from './components/messages';
import MessagesNew from './components/messages/new';

import './App.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#f56b2a"
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <Header />
                    <div className="App-body">
                        <Messages />
                        <MessagesNew />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
