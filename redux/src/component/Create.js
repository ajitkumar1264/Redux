import React, { useState } from "react";
import { addUser } from "./userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Create.css"

function Create() {
  const [data, setdata] = useState({});
  const userId = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleData = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: userId[userId.length - 1].id + 1,
        name: data.name,
        email: data.email,
      })
    );
    nav("/");
  };

  return (
    <>
  
      <form className="form">
        <label for="name">
          Name :
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              handleData(e);
            }}
          />
        </label>
        <label for="email">
          Email :
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => {
              handleData(e);
            }}
          />
        </label>
        <button onClick={submitData}>Submit</button>
      </form>
    </>
  );
}

export default Create;
