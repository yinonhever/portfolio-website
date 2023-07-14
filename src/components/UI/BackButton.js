import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BackButton = props => {
  const navigate = useNavigate();

  return (
    <div className="button-back-container">
      <Button unite extra="button--back" clicked={() => navigate(-1)}>
        <i className="button--back__icon fas fa-long-arrow-alt-left" />
        <span className="button--back__text">Back</span>
      </Button>
    </div>
  );
};

export default BackButton;
