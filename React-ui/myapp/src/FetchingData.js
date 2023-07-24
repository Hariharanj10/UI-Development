import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border: 5px solid #303952;
  background-color: ;
  min-width: 25%;
  background-color: white;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
//   margin: 10px;
  margin-top: 70px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: #bdc3c7;
`;
const StyledItem = styled.div``;
const StyledButton = styled.button`
  width: 60px;
  height: 30px;
  background-color: wheat;
  text-transform: uppercase;
  outline: none;
  border: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const StyledHeaded = styled.div`
  display: flex;
  height: 77px;
  justify-content: space-between;
  align-items: center;
  background-color: wheat;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 20px;
  z-index: 3;
  &:hover {
    cursor: pointer;
  }
`;
const SyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px;
  pading: 10px;
  font-weight: bold;
`;

const FetchingData = () => {
  const [postData, setPostData] = useState({});
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handlePost = (item) => {
    console.log(item);
    setPostData({
      title: item?.title,
      price: item?.price,
      description: item?.description,
      image: item?.image,
      category: item?.category,
    });
    axios
      .post("https://fakestoreapi.com/products", postData)
      .then((res) => res.status === 200 && alert("sucessfully posted  and Add to cart successfully"))
      .catch((err) => alert("Error occur ", err));
  };
  return (
    <>
      <StyledHeaded>
        <SyledItem>
          <div>About</div>
          <div>Home</div>
          <div>Contact</div>
        </SyledItem>
        <SyledItem>
          <div>Sign in</div>
        </SyledItem>
      </StyledHeaded>
      <StyledWrapper>
        {data?.map((item) => {
          return (
            <StyledContainer key={item.id}>
              <StyledItem>
                <StyledImage src={item.image}></StyledImage>
              </StyledItem>
              <StyledItem>
                <h3>{item.category}</h3>
              </StyledItem>
              <StyledItem>
                <h3>Price:{item.price}</h3>
              </StyledItem>
              <StyledItem>
                <StyledButton onClick={() => handlePost(item)}>
                  buy
                </StyledButton>
              </StyledItem>
            </StyledContainer>
          );
        })}
      </StyledWrapper>
    </>
  );
};
export default FetchingData;
