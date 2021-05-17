import { RegisterClient, LoginClient } from './clientSlice'
import axios from 'axios'
import {clientUrl} from '../url'

export const CreateClient = (client) => (dispatch) => {
    axios.post(`${clientUrl}register`,client)
        .then(cl => dispatch(RegisterClient(cl)))
}

export const LoadClient = (loginInfo) => (dispatch) => {
    axios.get(`${clientUrl}`, loginInfo)
        .then(cl => dispatch(LoginClient(cl)))
}
