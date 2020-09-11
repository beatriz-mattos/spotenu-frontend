import React from "react";
import { TextField, Button } from "@material-ui/core";
import { SubmitForm, LogoSpotenuBlack } from "../../utils/styles";
import PageTitle from "../../utils/PageTitle";
import LogoSpotenu from "../../assets/spotenu-1.png";
import { useHistory } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import api from "../../services/api";

export function AdminSignupPage() {
    const history = useHistory();
    const token = localStorage.getItem("token");

    const { form, onChangeInput } = useForm({
        name: "",
        email: "",
        nickname: "",
        password: "",
        type: "ADMIN"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        onChangeInput(e);
    };

    const onSubmitadmin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/user/signup/admin", form)
            .then((response) => {
                history.push("/user/login/admin")
            });

        } catch (err) {
            console.log("err", err.response)
        };

        history.push("/admin-page");
    };

    return (
        <div>
            <SubmitForm autocomplete="on" onSubmit={onSubmitadmin}>
                <LogoSpotenuBlack src={LogoSpotenu} alt="Logo_sptn" />
                <PageTitle title={"Cadastro de novo usuário administrador"} />
                <TextField
                    minLength={3}
                    name={"nickname"}
                    value={form["nickname"]}
                    label={"Nickname"}
                    onChange={handleInputChange}
                    placeholder="Insira o nickname"
                    pattern="[A-Az-z]{3, }"
                    title="O nickname deve conter 3 letras no mínimo"
                    required
                />

                <TextField
                    minLength={3}
                    name={"name"}
                    value={form["name"]}
                    label={"Nome"}
                    onChange={handleInputChange}
                    placeholder={"Insira o nome"}
                    pattern="[A-Az-z]{3, }"
                    title="O nome deve conter 3 letras no mínimo"
                    required
                />

                <TextField
                    name={"email"}
                    value={form["email"]}
                    label={"E-mail"}
                    type="email"
                    placeholder={"Insira o e-mail"}
                    onChange={handleInputChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="O e-mail deve obedecer o formato exigido."
                    required
                />

                <TextField
                    name={"password"}
                    value={form["password"]}
                    label={"Senha"}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    pattern="[0-9a-zA-Z]{6,}"
                    title="A senha deve conter no mínimo 6 caracteres."
                    required
                />

                <Button type={"submit"} variant={"contained"} color={"secondary"}> ADICIONAR ADMIN </Button>
            </SubmitForm>
        </div>
    );
};

export default AdminSignupPage;