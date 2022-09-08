import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
export default function Headder() {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Grid container>
                <Grid item sm ={6} style={{border:'1px solid #fff'}}>
                    <InputBase/>
                </Grid>
                <Grid item sm ={6} style={{border:'1px solid #000'}}>
                    <IconButton>

                    </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
