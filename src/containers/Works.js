import React, { useState } from "react";
import works from "../data";
import Aux from "../hoc/Auxilliary";
import PageHeading from "../components/layout/PageHeading";
import Work from "../components/UI/Work";
import Gallery from "../components/layout/Gallery";

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