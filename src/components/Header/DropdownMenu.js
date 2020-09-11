import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

export default function DropdownMenu() {
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
                <Button aria-controls="customized-menu" aria-haspopup="true" color="secondary" onClick={handleClickSubscribe}>
                    INSCREVA-SE
                </Button>
                <Menu
                    id="customized-menu"
                    anchorEl={anchorSubscribe}
                    keepMounted
                    open={Boolean(anchorSubscribe)}
                    onClose={handleCloseSubscribe}
                    color="primary"
                >
                    <MenuItem onClick={handleCloseSubscribe} component={Link} to={'/user/signup'}>Como usuário</MenuItem>
                    <MenuItem onClick={handleCloseSubscribe} component={Link} to={'/band/signup'}>Como banda</MenuItem>
                </Menu>
            </>

            <>
                <Button aria-controls="customized-menu" aria-haspopup="true" color="secondary" onClick={handleClickLogin}>
                    ENTRAR
                </Button>
                <Menu
                    id="customized-menu"
                    anchorEl={anchorLogin}
                    keepMounted
                    open={Boolean(anchorLogin)}
                    onClose={handleCloseLogin}
                    color="primary"
                >
                    <MenuItem onClick={handleCloseLogin} component={Link} to={'/user/login/admin'}>Como admin</MenuItem>
                    <MenuItem onClick={handleCloseLogin} component={Link} to={'/user/login'}>Como usuário</MenuItem>
                    <MenuItem onClick={handleCloseLogin} component={Link} to={'/band/login'}>Como banda</MenuItem>
                </Menu>
            </>
        </div>

    );
};