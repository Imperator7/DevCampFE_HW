import axios from 'axios'
const endpoint = 'https://crudcrud.com/api/af2c6a5a3eb94b7aa65f8d2ae247553a'

export default axios.create({
    baseURL: endpoint
})