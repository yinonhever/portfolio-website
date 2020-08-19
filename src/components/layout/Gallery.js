import React, { useEffect, useState } from "react";
import works from "../../data";
import Aux from "../../hoc/Auxilliary";
import BackButton from "../UI/BackButton";
import Button from "../UI/Button";
import ExternalLink from "../UI/ExternalLink";
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
        if (image !== selectedImage) {
            setSelectedImage(null);
            setTimeout(() => setSelectedImage(image), 10);
        }
    }

    return (
        <Aux>
            <BackButton />
            <main className="gallery">
                <div className="gallery__intro">
                    <h2 className="gallery__heading">{work.title}</h2>
                    <p className="paragraph gallery__intro-text">{work.description}</p>
                    <div className="gallery__intro-buttons">
                        <ExternalLink link={work.url}>
                            <Button fill>Go to website</Button>
                        </ExternalLink>
                        <ExternalLink link={work.githubUrl}>
                            <Button unite>View on Github</Button>
                        </ExternalLink>
                    </div>
                </div>
                <div className="gallery__container">
                    <div className="gallery__items">
                        {work.gallery && work.gallery.map(section =>
                            <GallerySection
                                key={section.title}
                                title={section.title}
                                items={section.items}
                                itemClicked={itemClickHandler}
                            />)}
                    </div>
                    <div className="gallery__selected">
                        {selectedImage && <SelectedImage image={selectedImage} />}
                    </div>
                </div>
            </main>
        </Aux>
    )
}

export default Gallery;