import Reactg from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from "styled-components";

const SubscribeButton = styled(Button)`
  background-color: green;
  height: 80px;
`

const LoginButton = styled(Button)`
    background-color: green;
    height: 80px;
`

export default function SimpleMenu() {
    const [anchorSubscribe, setAnchorSubscribe] = React.useState(null);
    const [anchorLogin, setAnchorLogin] = React.useState(null);

    const handleClickLogin = (event) => {
        setAnchorLogin(event.currentTarget);
    };
    const handleCloseLogin = () => {
        setAnchorLogin(null);
    };
    const handleClickSubscribe = (event) => {
        setAnchorSubscribe(event.currentTarget);
    };
    const handleCloseSubscribe = () => {
        setAnchorSubscribe(null);
    };

    return (
        <div>
            <>
                <SubscribeButton aria-controls="customized-menu" aria-haspopup="true" color="secondary" onClick={handleClickSubscribe}>
                    INSCREVA-SE
                </SubscribeButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorSubscribe}
                    keepMounted
                    open={Boolean(anchorSubscribe)}
                    onClose={handleCloseSubscribe}
                    color="primary"
                >
                    <MenuItem onClick={handleCloseSubscribe}>Como usuário</MenuItem>
                    <MenuItem onClick={handleCloseSubscribe}>Como banda</MenuItem>
                </Menu>
            </>

            <>
                <LoginButton aria-controls="customized-menu" aria-haspopup="true" color="secondary" onClick={handleClickLogin}>
                    ENTRAR
                </LoginButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorLogin}
                    keepMounted
                    open={Boolean(anchorLogin)}
                    onClose={handleCloseLogin}
                    color="primary"
                >
                    <MenuItem onClick={handleCloseLogin}>Como admin</MenuItem>
                    <MenuItem onClick={handleCloseLogin}>Como usuário</MenuItem>
                    <MenuItem onClick={handleCloseLogin}>Como banda</MenuItem>
                </Menu>
            </>
        </div>

    );
}