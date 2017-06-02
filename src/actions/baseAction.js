export function fetchBase() {
    return {
        type: "FETCH_BASE_FULFILLED",
        payload: {
            base: "EUR"
        }
    }
}
