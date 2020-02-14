let defaultState = {
    login: false,
    useInfo: {

    },
    list: [
        'React',
        'Ant-Design'
    ]
}
const storage = sessionStorage.getItem("hc_state")
if (storage) {
    defaultState = JSON.parse(storage)
}
export default (state = defaultState, action) => {
    // 只能接收state，不能改变state
    let newState
    if (action.type === 'logined') {
        newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.login = action.value
        newState.useInfo = action.useInfo
    }

    if (action.type === 'userInfo') {
        newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.useInfo = action.useInfo
    }

    if (newState) {
        sessionStorage.setItem("hc_state", JSON.stringify(newState))
        return newState
    }

    return state
}