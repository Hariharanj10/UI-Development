import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/inputForm/InputReducer";
import styled from "styled-components";
import { apiRequest } from "../redux/phoneNum/phoneActions";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Ptag = styled.p`
  padding: 0;
  margin: 0px;
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

const Dropdown = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const InputComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRequest());
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const existingData = useSelector((state) => state?.form?.formData);
  const phoneNum = useSelector((state) => state?.phoneNums?.phoneNums);
  const sortedPhoneNums = [...phoneNum].sort(
    (a, b) => a?.dial_code - b.dial_code
  );

  useEffect(() => {
    setSubmit(!isChecked);
  }, [isChecked]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
    };
    console.log(formData);
    dispatch(setFormData([...existingData, formData]));
    setEmail("");
    setName("");
    setPhoneNumber("");
    setCode("");
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
          onChange={(e) => setName(e.target.value)}
          pattern="[A-Z-a-z]"
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <CheckBoxContainer>
        <div>
          <input
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
        <div>
          <Ptag>I agree to all terms and conditions</Ptag>
        </div>
      </CheckBoxContainer>
      <InputContainer>
        <Dropdown onChange={(e) => setCode(e.target.value)}>
          <option value={code}>select code</option>
          {sortedPhoneNums &&
            sortedPhoneNums.map((item, index) => (
              <option key={index} value={item.dial_code}>
                {item.dial_code}{item.flag}
              </option>
            ))}
        </Dropdown>
        <Input
          type="text"
          pattern="[0-9]{10,}"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <SubmitButton type="submit" disabled={submit} value="Submit" />
      </InputContainer>
    </FormContainer>
  );
};

export default InputComponent;
