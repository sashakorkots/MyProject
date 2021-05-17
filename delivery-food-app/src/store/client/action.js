import { RegisterClient, LoginClient, Sign } from './clientSlice'
import axios from 'axios'
import {clientUrl} from '../url'
import { Redirect } from 'react-router'
import {toRestaurant} from '../path/pathSlice'

export const CreateClient = (client) => (dispatch) => {
    axios.post(`${clientUrl}register`,client)
        .then(console.log)

}

export const LoadClient = (loginInfo) => (dispatch) => {
    axios.post(`${clientUrl}login`, loginInfo, {withCredentials : true})         
        .then(console.log) 
        .then(_ => dispatch(toRestaurant()))
}

export const sigIn = () => (dispatch) => {
    axios.get(`${clientUrl}`, {withCredentials : true})    
        .then(cl => dispatch(Sign(cl.data)))
        
}
