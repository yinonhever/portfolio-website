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

    const submitHandler = (data, event) => {
        setLoading(true);
        axios.post("https://nagc.tech/mail",
            {
                to: "yinonehever@gmail.com",
                subject: "New message from " + data.name,
                html: `
                    <p><strong>Name: </strong> ${data.name}</p><br />
                    <p><strong>Email: </strong> ${data.email}</p><br />
                    <p><strong>Phone: </strong> ${data.phone}</p><br />
                    <p><strong>Company: </strong> ${data.company}</p><br />
                    <p><strong>Subject: </strong> ${data.subject}</p><br />
                    <p><strong>Message: </strong> ${data.message}</p>
                `
            },
            { headers: { token: "GT73K1w_gnsj-qSNdE_pcOP86sCJLsNgGu_ZyAEStdU" } })
            .then(() => {
                event.target.reset();
                setLoading(false);
                setError(false);
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
