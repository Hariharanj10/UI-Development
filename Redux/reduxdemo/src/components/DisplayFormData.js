import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  setFormData,
  setUpdate,
  setDelete,
} from "../redux/inputForm/InputReducer";
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:auto;
`;

const TableContainer = styled.div`
  width: 70%;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  width:100%;
`;

const EditableInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonContainer = styled.td`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DisplayFormData = () => {
  const formData = useSelector((state) => state?.form?.formData);
  const dispatch = useDispatch();
  const [updateName, setUpdateName] = useState(" ");
  const [updateEmail, setUpdateEmail] = useState(" ");
  const [editIndex, setEditIndex] = useState(-1);
  const handleDelete = (id) => {
    dispatch(setDelete(id));
    console.log(id)
  };

  console.log(updateName);

  const handleEdit = (index) => {
    setUpdateName(formData[index]?.name || " ");
    setUpdateEmail(formData[index]?.email || " ");
    setEditIndex(index);
  };
  const handleSave = (index) => {
    console.log(updateName);
    const obj = {
      name: updateName,
      email: updateEmail,
    };
    dispatch(setUpdate(index, obj));
    setEditIndex(-1);
  };

  return (
    <DashboardContainer>
      <h2>Form Data:</h2>
      <TableContainer>
        <table>
          <TableHeader>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>actions</th>
            </tr>
          </TableHeader>

          <tbody>
            {formData &&
              formData?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {editIndex === index ? (
                      <EditableInput
                        type="text"
                        value={updateName}
                        onChange={(e) => {
                          setUpdateName(e?.target?.value);
                        }}
                      />
                    ) : (
                      item?.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editIndex === index ? (
                      <EditableInput
                        type="email"
                        value={updateEmail}
                        onChange={(e) => {
                          setUpdateEmail(e?.target?.value);
                        }}
                      />
                    ) : (
                      item?.email
                    )}
                  </TableCell>
                  <TableCell>
                    {editIndex === index ? (
                      <ButtonContainer>
                        <Button onClick={() => handleSave(index)}>Save</Button>
                      </ButtonContainer>
                    ) : (
                      <ButtonContainer>
                        <Button onClick={() => handleDelete(index)}>Delete</Button>
                        <Button onClick={() => handleEdit(index)}>Edit</Button>
                      </ButtonContainer>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </tbody>
        </table>
      </TableContainer>
    </DashboardContainer>
  );
};

export default DisplayFormData;






