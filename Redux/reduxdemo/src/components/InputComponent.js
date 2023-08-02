import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/inputForm/InputReducer";
import styled from 'styled-components'; 

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const InputComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const existingData = useSelector((state) => state?.form?.formData);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
    };

    dispatch(setFormData([...existingData, formData]));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          placeholder="enter a name"
          required
          value={name}
          maxLength={20}
          minLength={2}
          onChange={(e) => setName(e?.target?.value)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type="email"
          placeholder="enter an email"
          required
          maxLength={20}
          minLength={4}
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
        />
      </InputContainer>
      <InputContainer>
        <SubmitButton type="submit" value="Submit" />
      </InputContainer>
    </FormContainer>
  );
};

export default InputComponent;
