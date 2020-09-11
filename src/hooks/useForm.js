import React, { useState } from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChangeInput = (e) => {
        const newValue = e.target.value;
        const fieldName = e.target.name;

        setForm({ ...form, [fieldName]: newValue });
    };

    const resetForm = () => {
        setForm(initialState);
    };

    const onSubmitApplication = async (e) => {
        e.preventDefault();
    };

    return { form, onChangeInput, resetForm, onSubmitApplication };
};
