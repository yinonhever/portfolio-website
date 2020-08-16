import React, { useEffect, useState } from "react";
import works from "../../data";
import BackButton from "../UI/BackButton";
import SelectedImage from "../UI/SelectedImage";

const Gallery = props => {
    const [work, setWork] = useState({});
    useEffect(() => {
        const matchingWork = works.find(work => work.id === props.match.params.id);
        if (matchingWork) {
            setWork(matchingWork);
        }
        else {
            props.history.push("/works");
        }
    }, [props])

    return (
        <main className="gallery">
            <BackButton />
            <div>{work.title}</div>
        </main>
    )
}

export default Gallery;