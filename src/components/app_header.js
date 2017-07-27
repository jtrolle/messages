import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/communication/comment';

export default (props) => {
    return (
        <AppBar
            title="Messages"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        />
    );
};