import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";

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
  // border: 5px solid #303952;
  min-width: 25%;
  background-color: #ffffff;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;
const StyledItemInput = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
`;
const StyledItem = styled.div``;
const StyledInput = styled.input`
  width: 40%;
  height: 30px;
  position: relative;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: bold;
    text-transform: uppercase;
    padding: 50px;
  }
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
`;
const StyledButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: wheat;
  border-radius: 5px;
  text-transform: uppercase;
  outline: none;
  margin: 2px;
  border: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const StyledButtonDtl = styled.button`
  width: 70px;
  height: 30px;
  background-color: #e94c89;
  border-radius: 5px;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin: 2px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
const StyledFormElement = styled.form``;

const StyledsearchDiv = styled.div`
  height: 30px;
  margin: 0px;
`;
const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState();
  const [newItem, setNewItem] = useState({
    title: "",
    price: 0,
    description: "",
    images: "",
    category: "",
  });

  const fetching = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      setData(res.data);
    } catch (err) {
      console.log("err");
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  const handleAdd = () => {
    axios
      .post("http://localhost:8000/products", newItem)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          alert("Item added successfully");
          fetching();
        }
      })
      .catch((err) => alert("Error while adding item."));
  };

  const handleUpdate = (item) => {
    console.log(item);
    const category = prompt("enter a category");
    const price = prompt("Enter the price");
    const updateobj = {
      ...item,
      category: category,
      price: price,
    };
    console.log(updateobj);
    axios
      .put(`http://localhost:8000/products/${item.id}`, updateobj)
      .then((res) => {
        if (res.status === 200) {
          alert("Item updated successfully");
          fetching();
        }
      })
      .catch((err) => alert("Error while updating item."));
  };

  const handleDelete = (itemId) => {
    axios
      .delete(`http://localhost:8000/products/${itemId}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Item deleted successfully");
          fetching();
        }
      })
      .catch((err) => alert("Error while deleting item."));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleSearch = (e) => {
    const filtered = data.filter((item) =>
      item?.category.startsWith(e.target.value)
    );

    setFilterData(filtered);
  };
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  return (
    <>
      <StyledItemInput>
        <StyledInput
          type="text"
          onChange={handleSearch}
          placeholder="search..."
        ></StyledInput>
      </StyledItemInput>
      <StyledWrapper>
        {filterData?.map((item) => {
          return (
            <StyledContainer key={item?.id}>
              <StyledItem>
                <StyledImage src={item?.images} />
              </StyledItem>
              <StyledItem>
                <h3>{item?.category}</h3>
              </StyledItem>
              <StyledItem>
                <h3>Price: {item?.price}</h3>
              </StyledItem>
              <StyledItem>
                <StyledButton onClick={() => handleUpdate(item)}>
                  Update
                </StyledButton>
                <StyledButtonDtl onClick={() => handleDelete(item.id)}>
                  Delete
                </StyledButtonDtl>
              </StyledItem>
            </StyledContainer>
          );
        })}
      </StyledWrapper>
      <StyledForm>
        <h2>Add New Item</h2>
        <StyledFormElement onSubmit={handleAdd}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={newItem?.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Price: </label>
            <br />
            <input
              type="text"
              name="price"
              value={newItem?.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description: </label>
            <br />
            <input
              type="text"
              name="description"
              maxLength={10}
              value={newItem?.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Images URL: </label>
            <br />
            <input
              type="text"
              name="images"
              value={newItem?.images}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Category: </label>
            <br />
            <input
              type="text"
              name="category"
              value={newItem?.category}
              onChange={handleChange}
              required
            />
          </div>
          <StyledButton type="submit">Add</StyledButton>
        </StyledFormElement>
      </StyledForm>
    </>
  );
};

export default CrudComponent;
