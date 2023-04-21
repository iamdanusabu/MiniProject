import { Button, Dialog, TextField, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import './style.css'

const LoginDialog = ({ open, setopen }) => {
  const [account, setaccount] = useState(false)
  

  const handleClose = () => {
    setopen(false)
    setaccount(false)
  }



  return (
  
      <Dialog open={open} onClose={handleClose}PaperProps={{sx:{maxWidth:"unset",maxHeight:'unset'}}} >
         <div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="sample"><h1>Hello</h1></div>

			</div>
		</div>
      </Dialog>
    
  )
}

export default LoginDialog