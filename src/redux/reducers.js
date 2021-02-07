import { LOAD_WORKS_SUCCESS, LOAD_WORKS_ERROR } from "./types";

const initialState = {
    works: [],
    loading: true,
    error: false
}

export const worksReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_WORKS_SUCCESS:
            return {
                works: payload,
                loading: false,
                error: false
            };
        case LOAD_WORKS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}