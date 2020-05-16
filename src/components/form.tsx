/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import useForm from "../lib/useForm";
import Launches from "./launches"

function Form() {
  const { inputs, handleChange } = useForm();

  function handleSubmit() {
    console.log(inputs);
  }

  return (
    <div className="container">
      <div
        css={css`
          max-width: 400px;
        `}
      >
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
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-bottom: 100px;
          `}
        >
          <div className="button" onClick={handleSubmit}>
            Send
          </div>
        </div>
        <code>{JSON.stringify(inputs)}</code>
        <Launches />
      </div>
    </div>
  );
}

export default Form;
