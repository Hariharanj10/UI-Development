import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalf } from "react-icons/fa";
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-center: center;
  flex-wrap: wrap;
`;
const ProfileCardContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 40%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
  box-shadow: 2px 2px 2px 2px #999;
`;
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: center;
`;
const ProfileImage = styled.img`
  max-width: 200px;
  max-height: 300px;
`;
const StyledButton = styled.button`
  border: none;
  background-color: wheat;
  width: 80px;
  height: 30px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 20px;
`;
const StyledStar = styled.div``;
const ProfileComponent = ({ props, onDelete}) => {
  const getStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="yellow" size={25}></FaStar>);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" color="yellow" size={25}></FaStarHalf>);
    }
    while (stars.length < 5) {
      stars.push(<FaStar key={stars.length} color="white" size={25}></FaStar>);
    }
    return stars;
  };
  return (
    <StyledContainer>
      {props?.map((profileData, index) => (
        <ProfileCardContainer key={index}>
          <StyledItem>
            <ProfileImage src={profileData.img} alt="Profile" />
          </StyledItem>
          <StyledItem>
            <p>Name: {profileData.username}</p>
            <p>Location: {profileData.location}</p>
            <p>Rating: {profileData.rating}</p>
            <StyledStar rating={parseFloat(profileData.rating)} />
            <div>{getStars(profileData.rating)}</div>
            <p>Feedback: {profileData.feedback}</p>

            <StyledButton onClick={() => onDelete(index)}>Delete</StyledButton>
          </StyledItem>
        </ProfileCardContainer>
      ))}
    </StyledContainer>
  );
};

export default ProfileComponent;
