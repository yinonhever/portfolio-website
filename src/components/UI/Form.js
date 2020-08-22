import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const Form = props => {
    const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

    const onSubmit = (data, event) => {
        event.target.reset();
        props.submit(data);
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className={errors.name ? "form__field error" : "form__field"}>
                <input className="form__input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={register({ required: true })}
                />
            </div>
            <div className={!errors.email ? "form__field" :
                errors.email?.type === "pattern" ? "form__field error invalid" :
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
                    ref={register({ required: false })}
                />
            </div>
            <div className="form__field">
                <input className="form__input"
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    ref={register({ required: false })}
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
    );
}

export default Form;