import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const ProfileCardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`;
const StyledStar=styled.div`

`
const ProfileComponent = ({ props ,onDelete,stars}) => {
    console.log(stars)
    const getStars = (props) => {
        const starCount= [];
        console.log(props)
        const floorCount= Math.round(props * 2) / 2;
        for (let index= 1; index <= 5; index++) {
          if (floorCount >= index) {
            starCount.push(<FaStar key={index} color='#B59410' size="30px"/>);
          } else if (floorCount >= index - 0.5) {
            starCount.push(<FaStarHalfAlt key={index} color='#B59410' size="30px"/>);
          } else {
            starCount.push(<FaRegStar key={index} color='#B59410' size="30px"/>);
          }
        }
        return starCount;
      };
  return (
    <div>
      {props.map((profileData, index) => (
        <ProfileCardContainer key={index}>
          <h2>Name: {profileData.username}</h2>
          <p>Location: {profileData.location}</p>
          <p>Rating: {profileData.rating}</p>
          <starsArray rating={parseFloat(profileData.rating)} />
          <div>{getStars(profileData.rating)}</div>
          <p>Feedback: {profileData.feedback}</p>
          <ProfileImage src={profileData.img} alt="Profile" />
         <button onClick={() => onDelete(index)}>Delete</button>
        </ProfileCardContainer>
      ))}
    </div>
  );
};

export default ProfileComponent;
