import { useState } from "react";

interface FormInputs {
  name: string;
  email: string;
  password: string;
}

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function useForm(initial = initialValues) {
  const [inputs, setInputs] = useState<FormInputs>(initial);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    let { value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  return {
    inputs,
    setInputs,
    handleChange,
    resetForm
  };
}
