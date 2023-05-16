import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
        <Toolbar>
            <Typography align='left' sx={{flexGrow:1}}>BLOG PAGE</Typography>
            <Button><Link to={'/'} style={{color:"white",textDecoration:"none"}}>Home</Link></Button>
            <Button><Link to={'/add'} style={{color:"white",textDecoration:"none"}}>Add</Link></Button>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar