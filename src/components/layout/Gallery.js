import React, { useEffect, useState } from "react";
import works from "../../data";
import Aux from "../../hoc/Auxilliary";
import BackButton from "../UI/BackButton";
import Button from "../UI/Button";
import GallerySection from "../UI/GallerySection";
import SelectedImage from "../UI/SelectedImage";

const Gallery = props => {
    const [work, setWork] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const matchingWork = works.find(work => work.id === props.match.params.id);
        if (matchingWork) {
            setWork(matchingWork);
            setSelectedImage(matchingWork.gallery[0].items[0]);
        }
        else {
            props.history.push("/works");
        }
    }, [props])

    const itemClickHandler = image => {
        setSelectedImage(null);
        setTimeout(() => setSelectedImage(image), 10);
    }

    return (
        <Aux>
            <BackButton />
            <main className="gallery">
                <div className="gallery__intro">
                    <h2 className="gallery__heading">{work.title}</h2>
                    <p className="paragraph gallery__intro-text">{work.description}</p>
                    <a rel="noopener noreferrer" href={work.url} target="_blank"
                        style={{ textDecoration: "none" }}>
                        <Button fill>Go to website</Button>
                    </a>
                </div>
                <div className="gallery__container">
                    <div className="gallery__items">
                        {work.gallery && work.gallery.map(section =>
                            <GallerySection
                                title={section.title}
                                items={section.items}
                                itemClicked={itemClickHandler}
                            />)}
                    </div>
                    {selectedImage && <SelectedImage image={selectedImage} />}
                </div>
            </main>
        </Aux>
    )
}

export default Gallery;