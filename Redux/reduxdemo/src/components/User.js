import React from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user?.users);
  const loading = useSelector((state) => state?.user?.loading);
  const error = useSelector((state) => state?.user?.error);
  return (
    <>
      <button onClick={() => dispatch(fetchUsers())}>call</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        users?.map((item, index) => (
          <div key={index}>
            <p>{item?.id}</p>
            <p>{item?.title}</p>
          </div>
        ))
      )}
    </>
  );
}

export default User;
