import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import CssBaseline from '@mui/material/CssBaseline';


export default function Headder() {
    
  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid item >
                    <InputBase/>
                </Grid>
                <Grid item sm></Grid>
                <Grid item >
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <LogoutIcon/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}
