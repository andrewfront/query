import axios from 'axios'
const customFeatch = axios.create({
    baseURL: 'http://localhost:5000/api/tasks',
})
export default customFeatch