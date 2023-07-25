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
const SyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px;
  pading: 10px;
  font-weight: bold;
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
  min-width: 25%;
  background-color: #ffffff;
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
const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: #bdc3c7;
  margin-top:70px;
`;

const StyledItem = styled.div``;

const StyledButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: wheat;
  text-transform: uppercase;
  outline: none;
  margin:2px;
  border: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const StyledButtonDtl = styled.button`
  width: 70px;
  height: 30px;
  background-color: red;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin:2px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const[updateValue,setUpdateValue] =useState({})
  const [filterData,setFilterData]=useState()
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
        console.log(res)
        if (res.status === 201) {
          alert("Item added successfully");
          fetching();
        }
      })
      .catch((err) => alert("Error while adding item."));
  };

  const handleUpdate = (item) => {
    console.log(item)
    const value =prompt("enter a value")
    const price =prompt("Enter the category")
    const updateobj={
        ...item,category:value,price:price
    }
    console.log(updateobj)
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
      item.category.startsWith(e.target.value)
    );
    setFilterData(filtered);
  };
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  return (
    <>
     <StyledHeaded>
        <SyledItem>
          <div>About</div>
          <div>Home</div>
          <div>Contact</div>
        </SyledItem>
        <StyledItem>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="search..."
          ></input>
        </StyledItem>
        <SyledItem>
          <div>Sign in</div>
        </SyledItem>
      </StyledHeaded>
      <StyledWrapper>
        {filterData?.map((item) => {
          return (
            <StyledContainer key={item.id}>
              <StyledItem>
                <StyledImage src={item.images} />
              </StyledItem>
              <StyledItem>
                <h3>{item.category}</h3>
              </StyledItem>
              <StyledItem>
                <h3>Price: {item.price}</h3>
              </StyledItem>
              <StyledItem>
                <StyledButton onClick={() => handleUpdate(item)}>
                  Update
                </StyledButton>
                <br />
                <StyledButtonDtl onClick={() => handleDelete(item.id)}>Delete</StyledButtonDtl>
              </StyledItem>
            </StyledContainer>
          );
        })}
      </StyledWrapper>
      <div>
        <h2>Add New Item</h2>
        <div>
          <label>Title: </label>
          <input type="text" name="title" value={newItem.title} onChange={handleChange} />
        </div>
        <div>
          <label>Price: </label>
          <input type="text" name="price" value={newItem.price} onChange={handleChange} />
        </div>
        <div>
          <label>Description: </label>
          <input type="text" name="description" value={newItem.description} onChange={handleChange} />
        </div>
        <div>
          <label>Images URL: </label>
          <input type="text" name="images" value={newItem.images} onChange={handleChange} />
        </div>
        <div>
          <label>Category: </label>
          <input type="text" name="category" value={newItem.category} onChange={handleChange} />
        </div>
        <StyledButton onClick={handleAdd}>Add</StyledButton>
      </div>
    </>
  );
};

export default CrudComponent;
