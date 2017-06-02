const initialState = {
    rates: [],
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_RATES": {
            return { ...state, fetching: true }
        }
        case "FETCH_RATES_REJECTED": {
            return { ...state, fetching: true, error: action.payload }
        }
        case "FETCH_RATES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                rates: action.payload
            }
        }  
    }
    return state
}
