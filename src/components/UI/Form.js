import React from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import Button from "./Button";

const Form = props => {
    const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

    return (
        <Fade left duration={600}>
            <form className="form" onSubmit={handleSubmit(props.submit)}>
                <div className={errors.name ? "form__field error" : "form__field"}>
                    <input className="form__input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        ref={register({ required: true })}
                    />
                </div>
                <div id="email" className={!errors.email ? "form__field" :
                    errors.email?.type === "required" ? "form__field error empty" :
                        "form__field error"}>
                    <input className="form__input"
                        type="text"
                        name="email"
                        placeholder="Email"
                        ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                </div>
                <div className="form__field">
                    <input className="form__input"
                        type="tel"
                        name="phone"
                        placeholder="Phone (optional)"
                        ref={register()}
                    />
                </div>
                <div className="form__field">
                    <input className="form__input"
                        type="text"
                        name="company"
                        placeholder="Company (optional)"
                        ref={register()}
                    />
                </div>
                <div className={errors.subject ? "form__field error" : "form__field"}>
                    <input className="form__input"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        ref={register({ required: true })}
                    />
                </div>
                <div className={errors.message ? "form__field message error" : "form__field message"}>
                    <textarea className="form__input form__textarea"
                        name="message"
                        placeholder="Enter your message here..."
                        ref={register({ required: true })}
                    />
                </div>
                <Button fill>Submit</Button>
            </form>
        </Fade>
    );
}

export default Form;