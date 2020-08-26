import React from "react";
import Carousel from "../UI/Carousel";
import Suggestion from "../UI/Suggestion";

const Suggestions = props => {
    const carouselItems = [];
    if (props.items) {
        props.items.forEach(item => carouselItems.push(<Suggestion id={item} key={item} />));
    }

    return (
        <section className="suggestions">
            <h2 className="suggestions__heading">Related Works</h2>
            <Carousel items={carouselItems} />
        </section>
    )
}

export default Suggestions;