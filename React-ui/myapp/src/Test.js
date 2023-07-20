import React, { useState } from "react";
import styled from "styled-components";
import ProfileComponent from "./ProfileComponent";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
`;
    
const StyledItem = styled.div`
  display: block;
  margin:2px;
  padding:2px;
`;

const DropdownContainer = styled.select``;
const RatingContainer = styled.select``;

const imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqgP7B9wb6Kb3qhPlyzSBUDp4fER7sdOydG1PLCz-8x34wgU0p36SKOKyYX17M0bHag4&usqp=CAU"; 

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

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledItem>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
        </StyledItem>
        <StyledItem>
          <label>
            Location:
            <DropdownContainer value={ln} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Select an option</option>
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </DropdownContainer>
          </label>
        </StyledItem>
        <StyledItem>
          <label>
            Rating:
            <RatingContainer value={ratingGiven} onChange={(e) => setRatingGiven(e.target.value)}>
              <option value="">Select an option</option>
              {ratingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </RatingContainer>
          </label>
        </StyledItem>
        <StyledItem>
            <label>
            Review:
          <textarea
            name="postContent"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          </label>
        </StyledItem>
        <StyledItem>
          <button type="submit">Submit</button>
        </StyledItem>
      </StyledForm>
      {formData.username && <ProfileComponent props={final} onDelete={handleDelete}  />}
    </StyledContainer>
  );
};

export default FormComponent;
