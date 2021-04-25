import React, { useState, useEffect, useContext, useRef } from "react";
import BackButton from "../UI/BackButton";
import GalleryIntro from "./GalleryIntro";
import GallerySection from "../UI/GallerySection";
import SelectedImage from "../UI/SelectedImage";
import WorksContext from "../../store/works-context";

const Gallery = props => {
    const { works } = useContext(WorksContext);
    const [work, setWork] = useState({});
    const [selectedImage, setSelectedImage] = useState();
    const container = useRef();

    useEffect(() => {
        const matchingWork = works.find(item => item.id === props.match.params.id);
        if (matchingWork) {
            setWork(matchingWork);
            setSelectedImage(matchingWork.gallery[0].items[0]);
            document.title = matchingWork.title + " – Yinon Hever";
            const { top } = container.current.getBoundingClientRect();
            window.scrollTo(0, top);
        }
        else {
            props.history.push("/works");
        }
    }, [props, works])

    const itemClickHandler = image => {
        setSelectedImage(null);
        setTimeout(() => setSelectedImage(image), 10);
        window.scrollTo(0, 800);
    }

    return (
        <div ref={container}>
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
        </div>
    )
}

export default Gallery;