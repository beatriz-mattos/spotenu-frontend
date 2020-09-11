import React from "react";
import { TextField, Button } from "@material-ui/core";
import { SubmitForm, TermsAcceptance, LogoSpotenuBlack } from "../../utils/styles";
import PageTitle from "../../utils/PageTitle";
import LogoSpotenu from "../../assets/spotenu-1.png";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import api from "../../services/api";
import { useHistory } from 'react-router-dom';

export default function BandSignupPage() {
    const history = useHistory();

    const { form, onChangeInput } = useForm({
        name: "",
        email: "",
        nickname: "",
        password: "",
        description: "",
        type: "BAND",
        isApproved: 0
    });

    const handleInputChange = (e) => {
        //const { name, value } = e.target;

        onChangeInput(e);
    };

    const requestBandSignup = async (e) => {
        e.preventDefault();
        console.log("form", form)

        try{
            const res = await api.post("/band/signup", form)
            .then((res) => {
                history.push("/band/login")
            });

        } catch(err){
            window.alert('Não foi possível cadastrar a banda', err.response);
        }
    };

    return (
        <div>
            <SubmitForm autocomplete="on" onSubmit={requestBandSignup}>
                <LogoSpotenuBlack src={LogoSpotenu} alt="Logo_sptn" />
                <PageTitle title={"Compartilhe com o mundo, registre uma banda!"} />

                <TextField
                    label={"Nickname"}
                    minLength={3}
                    name={"nickname"}
                    value={form["nickname"]}
                    onChange={handleInputChange}
                    placeholder="Insira o nickname"
                    pattern="[A-Az-z]{3, }"
                    title="O nickname deve conter 3 letras no mínimo"
                    required
                />

                <TextField
                    label={"Nome"}
                    minLength={3}
                    name={"name"}
                    value={form["name"]}
                    onChange={handleInputChange}
                    placeholder={"Insira o nome da banda"}
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
                    label={"Breve descrição"}
                    name={"description"}
                    value={form["description"]}
                    onChange={handleInputChange}
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
                    <input type="radio" value="accept-terms" />
                    <label for="accept-terms">Eu aceito os Termos e Condições e a Política de Privacidade do <strong>Spotenu</strong>.</label>
                </TermsAcceptance>

                <Button type={"submit"} variant={"contained"} color={"secondary"}>INSCREVER-SE</Button>

                <p>Já cadastrou a sua banda? <Link style={{ color: "green" }} to={"/band/login"}>Faça login</Link>.</p>
            </SubmitForm>
        </div>
    );
};