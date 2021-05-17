import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { LoadClient } from '../store/client/action'
import {toRestaurant} from '../store/path/pathSlice'

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
    const path = useSelector(state => state.path.path)
    
    const onSubmitHandler = (event) => {
        event.preventDefault()
        dispatch(LoadClient(fields.buildObject()))
        dispatch(toRestaurant())
    }

    return (
        <form id='login' className='border' onSubmit={onSubmitHandler}>
            <p>
                <input {...fieldEmail} />
                <input {...fieldPassword} />
            </p>
            <button type='submit'>login</button>
            <Redirect to={path} /> 
        </form>
    )
}

export default Login