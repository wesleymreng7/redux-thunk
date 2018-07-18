
const INITIAL_STATE = {
    data: [],
    isFetching: false
}
const ua = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOAD_USER_AGENT_REQUEST':
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case 'LOAD_USER_AGENT_SUCCESS':
            return {
                isFetching: false,
                data: action.data,
                error: false
            }
        case 'LOAD_USER_AGENT_ERROR':
            return {
                isFetching: false,
                data: [],
                error: true
            }
    } 
    return state
}
export default ua