import { useState } from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  height: 40px;
  border: none;
  color:#000000;
  margin: 5px;
  text-transform:uppercase;
`;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;
const StyledItem = styled.div`
  margin: 5px;
  padding: 5px;
`;
const Contact = () => {
  const value= [
    "Hello",
    "Am good",
    "hope you fine",
    "how are you",
    "need help",
    "please contact me",
  ]
  const [text, setText] = useState(" ");
  const [txt, setTxt] = useState(" ");
  const handleChange = (item) => {
    console.log(item);
    setText(text + " " + item);
  };
  const handleClear = (item) => {
    setText("");
    setTxt(" ");
  };
  const handleSubmit = () => {
    setTxt(text);
  };
  return (
    <StyledDiv>
      <StyledItem>
        {value.map((item, index) => {
          return (
            <StyledButton key={index} onClick={() => handleChange(item)}>
              {item}
            </StyledButton>
          );
        })}
      </StyledItem>
      <StyledItem>
        <form>
          <textarea
            name="postContent"
            value={text}
            rows={10}
            cols={90}
            readOnly
          />
        </form>
      </StyledItem>

      <StyledItem>
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        <StyledButton onClick={handleClear}>clear</StyledButton>
      </StyledItem>
      <h4>Output:{txt}</h4>
    </StyledDiv>
  );
};
export default Contact;
