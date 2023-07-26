import React from 'react';
import styled from 'styled-components';
import {FaDove} from "react-icons/fa";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Logo = styled(FaDove)`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const SignIn = () => {
  return (
    <SignInContainer>
      <Logo  />
      <SignInForm>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Sign In</Button>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;


