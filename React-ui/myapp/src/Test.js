import React, { useState } from "react";
import styled from "styled-components";
import ProfileComponent from "./ProfileComponent";
const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e9f1fb;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
  width: 50%;
  background-color: #f2f6fb;
  margin-top: 10px;
  padding: 20px;
`;

const StyledItem = styled.div`
  margin: 2px;
  padding: 2px;
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  border: 2px solid #000000;
`;
const StyledButton = styled.button`
  border: none;
  background-color: wheat;
  width: 80px;
  height: 30px;
  text-transform: uppercase;
  font-weight: bold;
`;
const DropdownContainer = styled.select`
  width: 200px;
  height: 30px;
  border: 2px solid #000000;
`;
const RatingContainer = styled.select`
  width: 200px;
  height: 30px;
  border: 2px solid #000000;
`;
const StyledText = styled.textarea`
  width: 200px;
  height: 60px;
  border: 2px solid #000000;
`;
const imgSrc =
  "https://www.pngkey.com/png/full/22-223848_businessman-vector-person-logo-png.png";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    rating: "",
    feedback: "",
    img: imgSrc,
  });
  const [final, setFinal] = useState([]);

  const [user, setUserName] = useState("");
  const [ln, setLocation] = useState("");
  const [ratingGiven, setRatingGiven] = useState("");
  const [text, setText] = useState("");
  const [userFilter, setUserFilter] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const locationOptions = ["chennai", "Bangalore", "Coimbatore"];
  const ratingOptions = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      username: user,
      location: ln,
      rating: ratingGiven,
      feedback: text,
      img: imgSrc,
    };
    setFormData(newFormData);
    setFinal((prevFinal) => [...prevFinal, newFormData]);
    setUserName("");
    setLocation("");
    setRatingGiven("");
    setText("");
  };
  const handleDelete = (index) => {
    setFinal((prevFinal) => prevFinal.filter((k, i) => i !== index));
  };
  const handleSearch = (e) => {
    // setFilterValue(e.target.value)
    // console.log(filterValue)
    setUserFilter(
      final.filter((item) => item.username.startsWith(e.target.value))
    );
  };
  return (
    <StyledMainContainer>
      <StyledContainer>
        <StyledForm onSubmit={handleSubmit}>
          <h1>Feedback Form</h1>
          <StyledItem>
            <label>Name:</label>
            <StyledInput
              type="text"
              name="name"
              value={user}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </StyledItem>
          <StyledItem>
            <label>Location:</label>
            <DropdownContainer
              value={ln}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select an option</option>
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </DropdownContainer>
          </StyledItem>
          <StyledItem>
            <label>Rating:</label>
            <RatingContainer
              value={ratingGiven}
              onChange={(e) => setRatingGiven(e.target.value)}
            >
              <option value="">Select an option</option>
              {ratingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </RatingContainer>
          </StyledItem>
          <StyledItem>
            <label>Review:</label>
            <StyledText
              name="postContent"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </StyledItem>
          <StyledItem>
            {user && <StyledButton type="submit">Submit</StyledButton>}
          </StyledItem>
        </StyledForm>
        <input onChange={handleSearch}></input>
      </StyledContainer>
      <ProfileComponent props={userFilter.length > 0 ? userFilter :final} onDelete={handleDelete} />;
    </StyledMainContainer>
  );
};

export default FormComponent;

//{ formData.username && (
// <ProfileComponent props={final} onDelete={handleDelete} />
// )}
