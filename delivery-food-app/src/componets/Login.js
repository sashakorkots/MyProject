import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoadClient } from '../store/client/action'

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

function Login() {
    const fieldEmail = useField('email','text')
    const fieldPassword = useField('password','password')    

    const fields = useForm(fieldEmail, fieldPassword)

    const dispatch = useDispatch()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        dispatch(LoadClient(fields.buildObject()))
    }

    return (
        <form id='login' className='border' onSubmit={onSubmitHandler}>
            <p>
                <input {...fieldEmail} />
                <input {...fieldPassword} />
            </p>
            <button type='submit'>login</button>
        </form>
    )
}

export default Login