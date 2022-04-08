import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';
const Navbar = () => {
  return (
       <AppBar position='static'  >
         <Toolbar>
             <Typography> Algolia-Api-App</Typography>
         </Toolbar>
      </AppBar>
    
  )
}

export default Navbar