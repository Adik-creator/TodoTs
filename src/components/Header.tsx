import React from 'react'
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { sizing } from '@material-ui/system';

function Header() {
    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Typography
                    variant="h4"
                    component="span"
                    style={{flexGrow: 1}}
                >
                    Todo List
                </Typography>
                <IconButton color="inherit">
                    <PlaylistAddIcon style={{height: 35, width: 35}}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export {Header}