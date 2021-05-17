import { RegisterClient, LoginClient, Sign } from './clientSlice'
import axios from 'axios'
import {clientUrl} from '../url'
import { Redirect } from 'react-router'

export const CreateClient = (client) => (dispatch) => {
    axios.post(`${clientUrl}register`,client)
        .then(console.log)

}

export const LoadClient = (loginInfo) => (dispatch) => {
    axios.post(`${clientUrl}login`, loginInfo, {withCredentials : true})
        .then(Redirect('home')) 
        .then(console.log) 
}

export const sigIn = () => (dispatch) => {
    axios.get(`${clientUrl}`, {withCredentials : true})    
        .then(cl => dispatch(Sign(cl.data)))
        
}
