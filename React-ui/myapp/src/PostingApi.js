import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
  margin: 10px;
  padding: 10px;
`;
const StyledInput = styled.input`
  height: 30px;
  width: 30%;
  border: 2px solid black;
`;

const PostingApi = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();

  const handlePost = () => {
    setData({
      title: title,
      price:price,
      description: description,
      image: "https://i.pravatar.cc",
      category: category,
    });
    axios
      .post("https://fakestoreapi.com/products", data)
      .then((res) => console.log(res.status,res.data))
  };
  return (
    <>
      <StyledDiv>
       <label>Title</label> <StyledInput onChange={(e) => setTitle(e.target.value)}></StyledInput>
       <label>Price</label> <StyledInput onChange={(e) => setPrice(e.target.value)}></StyledInput>
       <label>Description</label> <StyledInput
          onChange={(e) => setDescription(e.target.value)}
        ></StyledInput>
       <label>Image</label> <StyledInput onChange={(e) => setImage(e.target.value)}></StyledInput>
       <label>Category</label> <StyledInput
          onChange={(e) => setCategory(e.target.value)}
        ></StyledInput>
        <button onClick={handlePost}> post</button>
      </StyledDiv>
      <div>
      </div>
    </>
  );
};
export default PostingApi;
