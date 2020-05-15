/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import useForm from "../lib/useForm";

export default function Form() {
  const { inputs, handleChange, resetForm } = useForm();

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setValue(event.target.value);
  //   console.log(value);
  // }

  function handleSubmit() {
    console.log(inputs);
    resetForm();
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
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: flex-end;
            `}
          >
            <div className="button" onClick={handleSubmit}>
              {/* <div onClick={handleSubmit}> */}
              Send
            </div>
          </div>
        </form>
        <code>{JSON.stringify(inputs)}</code>
      </div>
    </div>
  );
}
