import React from "react";
import { TextField, Button } from "@material-ui/core";
import { SubmitForm, TermsAcceptance, LogoSpotenuBlack } from "../../utils/styles";
import PageTitle from "../../utils/PageTitle";
import LogoSpotenu from "../../assets/spotenu-1.png";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import api from "../../services/api";
import { useHistory } from 'react-router-dom';

function UserSignupPage() {
    const history = useHistory();

    const { form, onChangeInput } = useForm({
        name: "",
        email: "",
        nickname: "",
        password: "",
        type: "FREE_USER"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        onChangeInput(e);
    };

    const requestUserSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/user/signup", form)
                .then((res) => {
                    history.push("/user/login")
                });

        } catch (err) {
            console.log("err", err.response)
            window.alert('Não foi possível realizar seu cadastro', err.response);
        }
    };

    return (
        <div>
            <SubmitForm autocomplete="on" onSubmit={requestUserSignup}>
                <LogoSpotenuBlack src={LogoSpotenu} alt="Logo_sptn" />
                <PageTitle title={"Inscreva-se grátis e comece a curtir."} />
                <TextField
                    minLength={3}
                    name={"nickname"}
                    value={form["nickname"]}
                    label={"Nickname"}
                    onChange={handleInputChange}
                    placeholder="Insira o seu nickname"
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
                    placeholder={"Insira o seu nome"}
                    pattern="[A-Az-z]{3, }"
                    title="O nome deve conter 3 letras no mínimo"
                    required
                />

                <TextField
                    name={"email"}
                    value={form["email"]}
                    label={"E-mail"}
                    type="email"
                    placeholder={"Insira o seu e-mail"}
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

                <TermsAcceptance>
                    <input type="radio" value="accept-terms" required />
                    <label for="accept-terms">Eu aceito os Termos e Condições e a Política de Privacidade do <strong>Spotenu</strong>.</label>
                </TermsAcceptance>

                <Button type={"submit"} variant={"contained"} color={"secondary"}> INSCREVER-SE </Button>

                <p>Já tem uma conta? <Link to={"/user/login"} style={{ color: "green" }}>Faça login</Link>.</p>
            </SubmitForm>
        </div>
    );
};

export default UserSignupPage;