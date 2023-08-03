import React from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user?.users);
  const loading = useSelector((state) => state?.user?.loading);
  const error = useSelector((state) => state?.user?.error);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
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
            <table>
              <tr>
                <td>{item?.id}</td>
                <td>{item?.title}</td>
              </tr>
            </table>
          </div>
        ))
      )}
    </>
  );
}

export default User;
