import React, { useState } from "react";
import Input from "./Input";

const Form = props => {
    return (

        <form className="form">
            <div className="form__field">
                <input className="input" id="name" />
                <label for="name" className="form__label">Your name</label>
            </div>

        </form>
    )
}

export default Form;