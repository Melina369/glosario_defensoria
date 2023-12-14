import axios from 'axios'

export const getAllTitles = () => {
    return axios.get('http://127.0.0.1:8000/titulos/')

}

export const getAllWords = () => {
    return axios.get('http://127.0.0.1:8000/palabras/')

}