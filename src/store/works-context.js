import React, { useState, useEffect } from "react";
import axios from "axios";

const WorksContext = React.createContext({
    works: [],
    loading: true,
    error: false
});

export const WorksContextProvider = props => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadWorks = async () => {
            try {
                const response = await axios.get("https://portfolio-a5021-default-rtdb.firebaseio.com/works.json");
                setWorks(response.data);
            } catch {
                setError(true);
            }
            setLoading(false);
        }

        loadWorks();
    }, [])

    return (
        <WorksContext.Provider value={{ works, loading, error }}>
            {props.children}
        </WorksContext.Provider>
    )
}

export default WorksContext;