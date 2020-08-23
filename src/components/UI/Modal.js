import React from "react";

const Modal = props => {
    let classes = "modal";
    if (props.active) classes += " active";
    if (props.error) classes += " error";

    return (
        <div className={classes}>
            <div className="modal__content">
                <i className="modal__close fas fa-times" onClick={props.closed} />
                <h3 className="modal__heading">
                    {!props.error ? "Thank you for reaching out!" : "An error occured"}
                </h3>
                <p className="paragraph modal__text">
                    {!props.error ? "We'll be in touch soon." : "Please try again in a few minutes."}
                </p>
            </div>
        </div>
    )
}

export default Modal;