import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";
import Form from "../UI/Form";
import Spinner from "../UI/Spinner";
import Modal from "../UI/Modal";
import illustration from "../../images/undraw_contact_us_15o2.svg";

const ContactMain = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const submitHandler = async (_, event) => {
        setLoading(true);
        try {
            await emailjs.sendForm(
                "gmail",
                "template_y2lou84",
                event.target,
                "user_bWwrQk9Sb6FW9cPYtGs0t"
            );
            setError(false);
            event.target.reset();
        } catch {
            setError(true);
        }
        setLoading(false);
        setShowModal(true);
    }

    return (
        <Fragment>
            <main className="contact">
                <section className="contact__intro">
                    <Fade right duration={600}>
                        <img className="contact__img" src={illustration} alt="Contact" />
                    </Fade>
                </section>
                <Form submit={submitHandler} />
            </main>
            {loading && <Spinner />}
            <Modal active={showModal} error={error} closed={() => setShowModal(false)} />
        </Fragment>
    )
}

export default ContactMain;