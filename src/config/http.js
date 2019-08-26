import axios from './axios'

const api = {
    reg: (params, callback) => {
        axios.post('/regUser',params)
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    login: (params, callback) => {
        axios.post('/loginUser',params)
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    }
}

export default api