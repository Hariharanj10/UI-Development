import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
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
const AddCardButton = styled.button`
  width: 150px;
  height: 30px;
  background-color: whitesmoke;
  border-radius: 5px;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin: 4px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const StyledFormElement = styled.form``;
const CrudComponent = ({ setValue, setFindLength }) => {
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
      const response = await axios.get("http://localhost:8000/products");
      setData(response?.data);
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
      .then((response) => {
        console.log(response);
        if (response?.ok) {
          alert("Item added successfully");
          fetching();
        }
      })
      .catch((err) => alert("Error while adding item."));
  };

  const handleUpdate = (item) => {
    console.log(item);
    const category = prompt("Enter a category");

    if (category === null || category?.trim() === "") {
      alert("You must enter a category value.");
    } else {
      const isValidCategory = /^[a-zA-Z]+$/.test(category);

      if (!isValidCategory) {
        alert("Category input is not valid. Please enter valid inputs");
      } else {
        const price = prompt("Enter the price");

        if (price === null || price.trim() === "") {
          alert("You must enter a price value.");
        } else {
          const numericPrice = parseFloat(price);
          if (isNaN(numericPrice) || numericPrice < 0) {
            alert("Price input is not valid.");
          } else {
            const updateobj = {
              ...item,
              category: category,
              price: numericPrice,
            };
            console.log(updateobj);
            axios
              .put(`http://localhost:8000/products/${item.id}`, updateobj)
              .then((response) => {
                if (response?.status >= 200 && response?.status < 300) {
                  alert("Item updated successfully");
                  fetching();
                }
              })
              .catch((err) => alert("Error while updating item."));
          }
        }
      }
    }
  };

  const handleDelete = (itemId) => {
    if (filterData?.length > 2) {
      axios
        .delete(`http://localhost:8000/products/${itemId}`)
        .then((response) => {
          if (response?.status >= 200 && response?.status < 300) {
            alert("Item deleted successfully");
            fetching();
          }
        })
        .catch((err) => alert("Error while deleting item."));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleSearch = (e) => {
    const filtered = data?.filter((item) =>
      item?.category.startsWith(e.target.value)
    );
    setFilterData(filtered);
  };
  useEffect(() => {
    setFilterData(data);
  }, [data]);
  const handleAddCard = (item) => {
    setValue((prevAddCard) => [...prevAddCard, item]);
    setFindLength((index) => index + 1);
  };

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
                <StyledImage src={item?.images} alt="img" />
              </StyledItem>
              <StyledItem>
                <h3>{item?.category}</h3>
              </StyledItem>
              <StyledItem>
                <h3>Price: {item?.price}</h3>
              </StyledItem>
              <StyledItem>
                <AddCardButton onClick={() => handleAddCard(item)}>
                  {" "}
                  <FaShoppingCart /> Add to cart
                </AddCardButton>
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
              minLength={3}
              maxLength={15}
              pattern="[A-Za-z]+"
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
              minLength={1}
              maxLength={15}
              pattern="[0-9]+"
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
              minLength={3}
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
              minLength={1}
              maxLength={15}
              pattern="[A-Za-z]+"
            />
          </div>
          <StyledButton type="submit">Add</StyledButton>
        </StyledFormElement>
      </StyledForm>
    </>
  );
};

export default CrudComponent;
