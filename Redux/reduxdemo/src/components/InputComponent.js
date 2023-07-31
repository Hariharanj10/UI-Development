
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from '../redux/inputForm/InputReducer';

const InputComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
    };
    dispatch(setFormData(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="enter a name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="enter an email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default InputComponent;
