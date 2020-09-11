import React from "react";
import { TextField, Button } from "@material-ui/core";
import PageTitle from "../../utils/PageTitle";
import { SubmitForm, RememberMe, LogoSpotenuBlack } from "../../utils/styles";
import LogoSpotenu from "../../assets/spotenu-1.png";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import api from "../../services/api";
import { useHistory } from 'react-router-dom';

function UserLoginPage() {
    const history = useHistory();

    const { form, onChangeInput } = useForm({
        emailOrNickname: "",
        password: ""
    });

    const handleInputChange = (e) => {
        //const { name, value } = e.target;

        onChangeInput(e);
    };

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        console.log("form", form)
        try {
            const response = await api.post("/user/login", form)
                .then((response) => {
                    window.localStorage.setItem("token", response.data.token);
                    console.log("response", response)
                    history.push("/feed")
                })

            return response;
        } catch (err) {
            console.log("err", err.response)
        }
    };

    return (
        <div>
            <SubmitForm onSubmit={onSubmitLogin} >
                <LogoSpotenuBlack src={LogoSpotenu} alt="Logo_sptn" />
                <PageTitle title={"Para continuar, faça login no Spotenu."} />

                <TextField
                    label={"E-mail ou nickname"}
                    onChange={handleInputChange}
                    value={form["emailOrNickname"]}
                    name={"emailOrNickname"}
                />

                <TextField
                    label={"Senha"}
                    type={"password"}
                    onChange={handleInputChange}
                    value={form["password"]}
                    name={"password"}
                />

                <RememberMe>
                    <input type="radio" value="remember-me" />
                    <label for="remember-me">Lembrar de mim</label>
                </RememberMe>

                <Button type={"submit"} variant={"contained"} color={"secondary"}>ENTRAR</Button>

                <p>Não tem uma conta?</p>
                <Button variant={"outlined"} component={Link} to={'/user/signup'}>INSCREVER-SE NO SPOTENU</Button>
            </SubmitForm>
        </div>
    );
};

export default UserLoginPage;