import { useState, useRef, useLayoutEffect } from "react";

export default function useDimensions() {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({});

    useLayoutEffect(() => {
        setDimensions(ref.current.getBoundingClientRect().toJSON());
    }, [ref.current])

    return [ref, dimensions];
}