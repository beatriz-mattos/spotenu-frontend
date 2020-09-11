import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PageTitle from "../../utils/PageTitle";
import BandInfoItem from "./BandInfoItem";
import api from "../../services/api";

export function BandDetailsPage() {
    const [bands, setBands] = useState([]);
    const [form, onChangeInput] = useForm({
        name: "",
        email: "",
        nickname: "",
        isApproved: 0
    });

    useEffect(() => {
        api.get("band/all").then((response) => {
            console.log(response)
        })
    }, []);

    return (
        <div>
            <PageTitle title={"Bandas cadastradas"} />
            <div>
                <Card>
                    <CardContent>
                        <h5>Informações da banda</h5>
                        <BandInfoItem infoName={'Nome'} info={'Electric Wizard'} />
                        <BandInfoItem infoName={'E-mail'} info={'electricwizard@email.com'} />
                        <BandInfoItem infoName={'Nickname'} info={'Elwiz'} />
                        <BandInfoItem infoName={"Status"} info={"Aprovada"} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default BandDetailsPage;