import React, { useState, useEffect } from "react";
import works from "../../data";
import Aux from "../../hoc/Auxilliary";
import BackButton from "../UI/BackButton";
import GalleryIntro from "./GalleryIntro";
import GallerySection from "../UI/GallerySection";
import SelectedImage from "../UI/SelectedImage";
import Suggestions from "../layout/Suggestions";

const Gallery = props => {
    const [work, setWork] = useState({});
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        const matchingWork = works.find(work => work.id === props.match.params.id);
        if (matchingWork) {
            setWork(matchingWork);
            setSelectedImage(matchingWork.gallery[0].items[0]);
            window.scrollTo(0, 300);
        }
        else {
            props.history.push("/works");
        }
    }, [props])

    const itemClickHandler = image => {
        setSelectedImage(null);
        setTimeout(() => setSelectedImage(image), 10);
        window.scrollTo(0, 800);
    }

    return (
        <Aux>
            <BackButton />
            <main className="gallery">
                <GalleryIntro work={work} />
                <section className="gallery__container">
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
                </section>
            </main>
            <Suggestions items={["manage", "myteam", "scoot", "github-timeline-app", "dine", "bookmark"]} />
        </Aux>
    )
}

export default Gallery;