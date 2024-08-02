import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [valuesForm, setValuesForm] = useState(initialForm);


    const onInputChange = ({ target }) => {
        const { name, value } = target
        setValuesForm({
            ...valuesForm,
            [name]: value,
        });
    };

    const onResetForm = () =>{
        setValuesForm( initialForm )
    }

    return {
        ...valuesForm,
        valuesForm,
        onInputChange,
        onResetForm
    }
}