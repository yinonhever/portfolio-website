import React, { useState } from "react";
import axios from "axios";
import emailTemplate from "../../utility/emailTemplate";
import Aux from "../../hoc/Auxilliary";
import Fade from "react-reveal/Fade";
import Form from "../UI/Form";
import Spinner from "../UI/Spinner";
import Modal from "../UI/Modal";
import illustration from "../../images/Illustrations/undraw_contact_us_15o2.svg";

const ContactMain = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const submitHandler = (data, event) => {
        setLoading(true);
        axios.post("https://nagc.tech/mail", emailTemplate(data),
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

export default ContactMain;