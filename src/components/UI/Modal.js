import React from "react";

const Modal = props => {
    const { active, error, closed } = props;

    let classes = "modal";
    if (active) classes += " active";
    if (error) classes += " error";

    const heading = !error ? "Thank you for reaching out!" : "An error occured";
    const text = !error ? "We'll be in touch soon." : "Please try again in a few minutes.";

    return (
        <div className={classes}>
            <div className="modal__content">
                <i className="modal__close fas fa-times" onClick={closed} />
                <h3 className="modal__heading">{heading}</h3>
                <p className="paragraph modal__text">{text}</p>
            </div>
        </div>
    )
}

export default Modal;