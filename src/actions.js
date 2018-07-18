import axios from 'axios'
export const loadDataRequest= () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}
export const loadDataError= () => {
    return {
        type: 'LOAD_DATA_ERROR'
    }
}
export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}  

export const loadData = () => {
    return (dispatch) => {
        dispatch(loadDataRequest())
        axios.get('http://httpbin.org/ip').then(({data}) => dispatch(loadDataSuccess(data))).catch(e => {
            dispatch(loadDataError())
        })
    }
}
export const loadUserAgentRequest = () => {
    return {
        type: 'LOAD_USER_AGENT_REQUEST'
    }
}
export const loadUserAgentError = () => {
    return {
        type: 'LOAD_USER_AGENT_ERROR'
    }
}
export const loadUserAgentSuccess = (data) => {
    return {
        type: 'LOAD_USER_AGENT_SUCCESS',
        data
    }
}  

export const loadUserAgent = (axios) => {
    return (dispatch) => {
        dispatch(loadUserAgentRequest())
        axios.get('http://httpbin.org/user-agent').then(({data}) => dispatch(loadUserAgentSuccess(data))).catch(e => {
            dispatch(loadUserAgentError())
        })
    }
}

export default {
    loadUserAgent: loadUserAgent.bind(null, axios)
}