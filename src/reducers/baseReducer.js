const initalState = {
    base: '',
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initalState, action) {
    switch (action.type) {
        case "FETCH_BASE": {
            return { ...state, fetching: true }
        }
        case "FETCH_BASE_REJECTED": {
            return { ...state, fetching: true, error: action.payload }
        }
        case "FETCH_BASE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                base: action.payload
            }
        }  
    }
    return state
}
