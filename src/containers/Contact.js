import React, { useState } from "react";
import Aux from "../hoc/Auxilliary";
import PageHeading from "../components/layout/PageHeading";
import Form from "../components/UI/Form";
import SuccessModal from "../components/UI/SuccessModal";

const Contact = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <Aux>
            <PageHeading title="Contact" />
            <Form submit={() => setShowSuccess(true)} />
            <SuccessModal active={showSuccess} closed={() => setShowSuccess(false)} />
        </Aux>
    )
}

export default Contact;