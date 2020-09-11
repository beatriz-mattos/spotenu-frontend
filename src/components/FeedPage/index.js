import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function FeedPage() {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            history.push("/user/login")
        }
    });

    const handleLogOut = () => {
        localStorage.clear();
        history.push('/')
    };

    return (
        <div>
            <h1>Página em manutenção</h1>
            <p>Aguarde, e em poucos dias, poderá acessar a plataforma! </p>
            <Button variant={"outlined"} component={Link} to={'/'}>Voltar para home</Button>
            <Button variant={"outlined"} onClick={handleLogOut}>Fazer logout</Button>
        </div>
    );
};

export default FeedPage;