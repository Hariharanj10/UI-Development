
import React from "react";
import { useSelector } from "react-redux";

const DisplayFormData = () => {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div>
      <h2>Form Data:</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default DisplayFormData;
