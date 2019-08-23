import axios from './axios'

const api = {
    reg: (params, callback) => {
        console.log(params)
        axios.post('/regUser',params)
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    }
}

export default api