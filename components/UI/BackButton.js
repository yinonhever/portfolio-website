import React from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
  const { back } = useRouter();

  return (
    <div className="button-back-container">
      <Button unite extra="button--back" clicked={back}>
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          className="button--back__icon"
        />
        <span className="button--back__text">Back</span>
      </Button>
    </div>
  );
};

export default BackButton;
