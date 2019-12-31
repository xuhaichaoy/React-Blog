import axios from './axios'

const api = {
    reg: (params, callback) => {
        axios.post('/regUser', params)
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    login: (params, callback) => {
        axios.post('/loginUser', params)
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    getmine: (params, callback) => {
        axios.get('/myself', {
            params
        })
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    getList: (params, callback) => {
        axios.get('/articalList', {
            params
        })
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    allArticals: (params, callback) => {
        axios.get('/allArticals', {
            params
        })
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    allenter: (params, callback) => {
        axios.get('/allenter', {
            params
        })
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    detailArtical: (params, callback) => {
        axios.get('/detailArtical/' + params, {})
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    publishArtical: (params, callback) => {
        axios.post('/publishArtical', params)
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    getCurrentUser: (params, callback) => {
        axios.get('/getCurrentUser', {
            params
        })
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    changData: (params, callback) => {
        axios.post('/changeData', params)
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    logout: (params, callback) => {
        axios.get('/logout', {
            params
        })
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
    sendComment: (params, callback) => {
        axios.post('/sendComment', params)
        .then(res => {
            callback(res)
        }).catch(err => {
            return err
        })
    },
    deleteArticle: (params, callback) => {
        axios.post('/delete', params)
            .then(res => {
                callback(res)
            })
            .catch(err => {
                return err
            })
    },
}

export default api