import React, { Component } from 'react';
import { useState } from 'react';
import styled from "styled-components";
const About = () => {
  const [newItem, setNewItem] = useState({
    title: "",
    price: 0,
    description: "",
    images: "",
    category: "",
  });
  const handleChange=(e)=>{
    const {name,value}=e.target
    setNewItem((prev)=>({...prev,[name]:value}))
  }
  const handleAdd=(e)=>{

  }
  const StyledForm =styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap:10px;
`
  return (
    <div>
       <StyledForm>
        <h2>Add New Item</h2>
        <div>
          <label>Title: </label><br/>
          <input type="text" name="title" value={newItem.title} onChange={handleChange} />
        </div>
        <div>
          <label>Price: </label><br/>
          <input type="text" name="price" value={newItem.price} onChange={handleChange} />
        </div>
        <div>
          <label>Description: </label><br/>
          <input type="text" name="description" value={newItem.description} onChange={handleChange} />
        </div>
        <div>
          <label>Images URL: </label><br/>
          <input type="text" name="images" value={newItem.images} onChange={handleChange} />
        </div>
        <div>
          <label>Category: </label><br/>
          <input type="text" name="category" value={newItem.category} onChange={handleChange} />
        </div>
        <button onClick={handleAdd}>Add</button>
      </StyledForm>
       
      </div>
 );
};

export default About;
