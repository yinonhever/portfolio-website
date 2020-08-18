import React, { useEffect, useState } from "react";
import works from "../../data";
import Aux from "../../hoc/Auxilliary";
import BackButton from "../UI/BackButton";
import GalleryItem from "../UI/GalleryItem";
import SelectedImage from "../UI/SelectedImage";

const Gallery = props => {
    const [work, setWork] = useState({});
    const [selectedImage, setSelectedImage] = useState({});
    
    useEffect(() => {
        const matchingWork = works.find(work => work.id === props.match.params.id);
        if (matchingWork) {
            setWork(matchingWork);
            window.scrollTo(0, 0);
        }
        else {
            props.history.push("/works");
        }
    }, [props])

    return (
        <Aux>
            <BackButton />
            <main className="gallery">
                <h2 className="gallery__heading">{work.title}</h2>
                <SelectedImage />
            </main>
        </Aux>
    )
}

export default Gallery;