import axios from 'axios';


export function fetchRates() {
    return function (dispatch) {
        dispatch({ type: "FETCH_RATES" })
        
        axios.get("https://api.fixer.io/latest")
            .then((response) => {
                dispatch({ type: "FETCH_RATES_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_RATES_REJECTED", payload: err })
            })
    }
}
