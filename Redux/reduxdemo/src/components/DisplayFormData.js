import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormData,setUpdate, setDelete } from "../redux/inputForm/InputReducer";

const DisplayFormData = () => {
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();
  const [updateName,setUpdateName]=useState("")
  const[updateEmail,setUpdateEmail]=useState("")
  const [editIndex, setEditIndex] = useState(-1);
  const data = formData;

  const handleDelete = (id) => {
    dispatch(setDelete(id))
  };

console.log(updateName)
  
const handleEdit = (index) => {
  setEditIndex(index);
};
const handleSave = (index) => {
  const obj={
    name:updateName,
    email:updateEmail
  }
  dispatch(setUpdate(index,obj));
  setEditIndex(-1);
};

  return (
    <div>
      <h2>Form Data:</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>actions</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data?.map((item, index) => (
              <tr key={index}>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={item?.name}
                      onChange={(e) => {

                        setUpdateName(e.target.value)
                      }}
                    />
                  ) : (
                    item?.name
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="email"
                      value={item?.email}
                      onChange={(e) => {
                        setUpdateEmail(e.target.value)
                      }}
                    />
                  ) : (
                    item?.email
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <button onClick={() => handleSave(index, item)}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayFormData;
