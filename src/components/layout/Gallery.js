import React, { useEffect, useState } from "react";
import works from "../../data";
import Aux from "../../hoc/Auxilliary";
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
        <Aux>
            <BackButton />
            <main className="gallery">
                <div>{work.title}</div>
            </main>
        </Aux>
    )
}

export default Gallery;