import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaSadTear } from "react-icons/fa";
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  th {
    background-color: #f2f2f2;
    padding: 8px;
    text-align: left;
  }
  td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
`;
const Styledheading = styled.h2`
  display: flex;
  justify-content: center;
`;
const Card = ({ items, setFindLength, setValue }) => {
  const datas = items;
  const [updateData, setUpdateData] = useState(items);
  const handleDelete = (index) => {
    const filterData = updateData.filter((item, i) => i !== index);
    setUpdateData(filterData);
    setValue(filterData);
    setFindLength(updateData.length - 1);
  };
  const totalPrice = updateData.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <h1>Items</h1>
      <Table>
        {updateData.length > 0 && (
          <thead>
            <tr>
              <th>Price</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
        )}
        <tbody>
          {updateData &&
            updateData.map((item, index) => (
              <tr key={index}>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <FaTrashAlt
                    onClick={() => handleDelete(index)}
                    size={"25px"}
                    color={"black"}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {updateData.length > 0 && (
        <Styledheading>Total: Rs.{totalPrice}</Styledheading>
      )}
      {!totalPrice && (
        <Styledheading>
          {" "}
          <FaSadTear size={"30"} />
          cart is empty
        </Styledheading>
      )}
    </>
  );
};

export default Card;
