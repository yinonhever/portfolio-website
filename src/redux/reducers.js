const initialState = {
    works: [],
    loading: true,
    error: false
}

export const worksReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LOAD_WORKS_SUCCESS":
            return {
                works: payload,
                loading: false,
                error: false
            };
        case "LOAD_WORKS_FAIL":
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}