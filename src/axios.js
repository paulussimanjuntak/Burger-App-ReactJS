import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://my-react-burgerz.firebaseio.com/'
})

export default instance