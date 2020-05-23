import React from "react";
import useForm from "../lib/useForm";

function Form() {
  const { inputs, handleChange } = useForm();

  function handleSubmit() {
    console.log(inputs);
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "100px",
          }}
        >
          <div className="button" onClick={handleSubmit}>
            Send
          </div>
        </div>
        <code>{JSON.stringify(inputs)}</code>
      </div>
    </div>
  );
}

export default Form;
