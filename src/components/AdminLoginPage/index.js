import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { SubmitForm, RememberMe, LogoSpotenuBlack } from "../../utils/styles";
import PageTitle from "../../utils/PageTitle";
import LogoSpotenu from "../../assets/spotenu-1.png";
import { useForm } from "../../hooks/useForm";
import api from "../../services/api";
// import { Link } from "react-router-dom";

function AdminLoginPage() {
    const {form, onChangeInput} = useForm({
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
        try{  
            const response = await api.post("user/admin/login", form).then((response) => {
                window.localStorage.setItem("token", response.data.token);
                console.log("response", response)
                // history.push("/admin-area")
            })
    
            return response;
        } catch(err){
            console.log("err", err.response)
        }
    };

    return (
        <div>
            <SubmitForm autocomplete="on" onSubmit={onSubmitLogin}>
                <LogoSpotenuBlack src={LogoSpotenu} alt="Logo_spotenu_black" />
                <Typography variant="h6" align={"center"} style={{ color: "green" }} gutterBottom>Área do administrador</Typography>
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
            </SubmitForm>
        </div>
    );
};

export default AdminLoginPage;