import React from "react";
import PageTitle from "../../utils/PageTitle";
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom';

export function AdminPage() {
    return (
        <div>
            <PageTitle title={"Área do administrador"} />

            <p>Novas bandas cadastradas:</p>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button component={Link} to={'/band/all'}>
                    <ListItemText primary="Banda 1" />
                    <ThumbUpIcon />
                </ListItem>

                <ListItem button component={Link} to={'/band/all'}>
                    <ListItemText primary="Banda 2" />
                    <ThumbUpIcon />
                </ListItem>

                <ListItem button component={Link} to={'/band/all'}>
                    <ListItemText primary="Banda 3" />
                    <ThumbUpIcon />
                </ListItem>
            </List>

            <Button variant={'contained'} color={'secondary'} component={Link} to={'/band/all'}>Ver todas as bandas</Button>
            
            <Button variant={"outlined"} color={"secondary"} component={Link} to={'/user/signup/admin'}>Cadastrar novo admin</Button>
        </div>
    );
};

export default AdminPage;