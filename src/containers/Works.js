import React, { useState } from "react";
import works from "../data";
import Aux from "../hoc/Auxilliary";
import PageHeading from "../components/PageHeading";
import Work from "../components/Work";
import Gallery from "../components/Gallery";

const Works = () => {
    const [gallery, setGallery] = useState([]);
    const [showGallery, setShowGallery] = useState(false);

    const openGalleryHandler = selection => {
        setShowGallery(true);
        setGallery(selection);
    }

    return (
        <Aux>
            {works.map((work, index) =>
                <div>

                </div>)}
        </Aux>
    )
}

export default Works;