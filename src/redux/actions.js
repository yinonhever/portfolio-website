import axios from "axios";

export const loadWorks = () => async dispatch => {
    try {
        const response = await axios.get("https://portfolio-a5021-default-rtdb.firebaseio.com/works.json");
        dispatch({
            type: "LOAD_WORKS_SUCCESS",
            payload: response.data
        });
    } catch {
        dispatch({ type: "LOAD_WORKS_FAIL" });
    }
}