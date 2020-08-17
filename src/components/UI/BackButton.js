import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./Button";

const BackButton = props => (
    <Button unite extra="button--back" clicked={() => props.history.goBack()}>
        <i className="button--back__icon fas fa-long-arrow-alt-left" />
        <span className="button--back__text">Back</span>
    </Button>
)

export default withRouter(BackButton);