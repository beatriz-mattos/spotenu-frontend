import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from "styled-components";

const SubscribeButton = styled(Button)`
  background-color: green;
  height: 80px;
`;

const SubscribeMenu = styled(Menu)`
    background-color: white;
`

const LoginButton = styled(Button)`
    background-color: green;
    height: 80px;
`

const LoginMenu = styled(Menu)`
    background-color: white;
`

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <>
            <SubscribeButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                INSCREVA-SE
            </SubscribeButton>
            <SubscribeMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Como usuário</MenuItem>
                <MenuItem onClick={handleClose}>Como banda</MenuItem>
            </SubscribeMenu>
        </>

        <>
            <LoginButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                ENTRAR
            </LoginButton>
            <LoginMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Como admin</MenuItem>
                <MenuItem onClick={handleClose}>Como usuário</MenuItem>
                <MenuItem onClick={handleClose}>Como banda</MenuItem>
            </LoginMenu>
        </>
    </div>
    
  );
}