import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Aux from "../hoc/Auxilliary";
import PageHeading from "../components/layout/PageHeading";
import Form from "../components/UI/Form";
import Spinner from "../components/UI/Spinner";
import Modal from "../components/UI/Modal";
import illustration from "../images/Illustrations/undraw_contact_us_15o2.svg";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useLayoutEffect(() => window.scrollTo(0, 0), []);

    const submitHandler = data => {
        setLoading(true);
        axios.get("https://nagc.tech/mail",
            {
                headers: { token: "GT73K1w_gnsj-qSNdE_pcOP86sCJLsNgGu_ZyAEStdU" },
                body: {
                    "to": "yinonehever@gmail.com",
                    "subject": data.subject,
                    "html": data.message
                }
            })
            .then(() => {
                setLoading(false);
                setError(false);
                setShowModal(true);
            })
            .catch(error => {
                setLoading(false);
                setError(true);
                setShowModal(true);
                console.log(error);
            })
    }

    return (
        <Aux>
            <PageHeading title="Contact" />
            <main className="contact">
                <section className="contact__intro">
                    <Fade right duration={600}>
                        <img className="contact__img" src={illustration} alt="contact" />
                    </Fade>
                </section>
                <Form submit={submitHandler} />
            </main>
            {loading && <Spinner />}
            <Modal active={showModal} error={error} closed={() => setShowModal(false)} />
        </Aux>
    )
}

export default Contact;
