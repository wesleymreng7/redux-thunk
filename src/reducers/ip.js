const INITIAL_STATE = {
    data: [],
    isFetching: false
}
const ip = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOAD_DATA_REQUEST':
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case 'LOAD_DATA_SUCCESS':
            return {
                isFetching: false,
                data: action.data,
                error: false
            }
        case 'LOAD_DATA_ERROR':
            return {
                isFetching: false,
                data: [],
                error: true
            }
    } 
    return state

}
export default ip