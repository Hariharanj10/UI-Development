import styled from "styled-components";
import { useState } from "react";

const BackgroundColorContainer = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props?.color ? props?.color : "white")};
`;
const InputComponent = ({ setChangeClicked, setValue }) => {
  return (
    <input
      type="text"
      id="message"
      name="message"
      onChange={(e) => {
        setChangeClicked(false);
        setValue(e.target.value);
      }}
    />
  );
};
const ColorChanging = () => {
  const [valueT, setValue] = useState("blue");
  const [changeClicked, setChangeClicked] = useState(false);

  return (
    <BackgroundColorContainer color={changeClicked ? valueT : "white"}>
      <InputComponent setValue={setValue} setChangeClicked={setChangeClicked} />
      <button onClick={() => setChangeClicked(true)}>submit</button>
    </BackgroundColorContainer>
  );
};
export default ColorChanging;
