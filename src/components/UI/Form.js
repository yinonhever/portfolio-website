import React from "react";
import { useForm } from "react-hook-form";
import { Fade } from "react-awesome-reveal";
import Button from "./Button";

const Form = props => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  return (
    <Fade direction="left" duration={600}>
      <form className="form" onSubmit={handleSubmit(props.submit)}>
        <div className={errors.name ? "form__field error" : "form__field"}>
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </div>
        <div
          id="email"
          className={
            !errors.email
              ? "form__field"
              : errors.email?.type === "required"
              ? "form__field error empty"
              : "form__field error"
          }
        >
          <input
            className="form__input"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
        </div>
        <div className="form__field">
          <input
            className="form__input"
            type="tel"
            placeholder="Phone (optional)"
            {...register("phone")}
          />
        </div>
        <div className="form__field">
          <input
            className="form__input"
            type="text"
            placeholder="Company (optional)"
            {...register("company")}
          />
        </div>
        <div className={errors.subject ? "form__field error" : "form__field"}>
          <input
            className="form__input"
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />
        </div>
        <div
          className={
            errors.message ? "form__field message error" : "form__field message"
          }
        >
          <textarea
            className="form__input form__textarea"
            placeholder="Enter your message here..."
            {...register("message", { required: true })}
          />
        </div>
        <Button fill>Submit</Button>
      </form>
    </Fade>
  );
};

export default Form;
