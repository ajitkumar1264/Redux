import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delUser } from "./userReducer";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const [searchuser, setsearchuser] = useState("");
  const users = useSelector((state) => state.users);
  //const [mainuser, setmainuser] = useState(users);
  const mainuser = users;

  // const handlevalue = (e) => {
  //   setsearchuser(e.target.value);
  //   const newuser = mainuser.filter((users) =>
  //     users.name.toLowerCase().includes(searchuser.toLowerCase())
  //   );
  //   setmainuser(newuser);
  // };

  const handledel = (e, id) => {
    e.preventDefault();

    dispatch(delUser({ id: id }));
  };

  return (
    <>
      <button className="create">
        <Link to="/create">Create Data</Link>
      </button>
      <div className="container">
        <div>
          <table>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            {mainuser.map((ele, idx) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>
                    <Link to={`edit/${ele.id}`}>
                      <button>Edit</button>
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={(e) => {
                        handledel(e, ele.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
