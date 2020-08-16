import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./Button";

const BackButton = props => (
    <Button unite extra="gallery__back" clicked={() => props.history.goBack()}>
        Back
    </Button>
)

export default withRouter(BackButton);