import axios from 'axios'
import {API_URL} from '../constants'
//import {connect} from 'react-redux'

export function fetcAll(data){
    return {
        type: "FETCH_ALL",
        payload: data


    }
}