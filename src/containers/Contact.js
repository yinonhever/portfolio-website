import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import Aux from "../hoc/Auxilliary";
import PageHeading from "../components/layout/PageHeading";
import Form from "../components/UI/Form";
import Spinner from "../components/UI/Spinner";
import Modal from "../components/UI/Modal";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useLayoutEffect(() => window.scrollTo(0, 0), []);

    const submitHandler = data => {
        setLoading(true);
        axios.post("https://portfolio-website-b6e1d.firebaseio.com/messages.json", data)
            .then(() => {
                setLoading(false);
                setShowModal(true);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
                setShowModal(true);
            })
    }

    return (
        <Aux>
            <PageHeading title="Contact" />
            <main className="contact">
                <section className="contact__intro">
                    
                </section>
                <Form submit={submitHandler} />
            </main>
            {loading && <Spinner />}
            <Modal active={showModal} error={error} closed={() => setShowModal(false)} />
        </Aux>
    )
}

export default Contact;