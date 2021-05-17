import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateClient } from '../store/client/action'

function useForm(...fields) {
    return {
        buildObject : () => fields.reduce((obj,f) => ({...obj, [f.name] : f.value}), {}),
        cleanAll : () => fields.map(m => m.setvalue.setvalue(""))
    }
}

function useField(name, type) {

    const [value, setValue] = useState("");
    return {
        type,
        value,
        name,
        placeholder: name.toUpperCase(),
        onChange: event => setValue(event.target.value),
        setvalue: { setvalue : setValue}
    }
}

function Register() {
    const fieldName = useField('name','text')
    const fieldSurname = useField('surname','text')
    const fieldEmail = useField('email','text')
    const fieldPassword = useField('password','password')    

    const fields = useForm(fieldName, fieldSurname, fieldEmail, fieldPassword)

    const dispatch = useDispatch()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(/* fields.buildObject() */)
    }

    return (
        <form id='register' onSubmit={onSubmitHandler}>
            <p>
                <input {...fieldName} />
                <input {...fieldSurname} />
                <input {...fieldEmail} />
                <input {...fieldPassword} />
            </p>
            <button type='submit'>register</button>
        </form>
    )
}

export default Register