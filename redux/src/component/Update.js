import React, { useEffect, useState } from "react";
import { updtUser } from "./userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [data, setdata] = useState({});
  const [indata, setindata] = useState(null);
  const nav = useNavigate();
  const { id } = useParams();
  
  const user = useSelector((state) => state.users);
  const currentuser = user.filter((user) => user.id == id);

  //  setdata(currentuser);
  //  console.log(data);

  // useEffect(()=>{

  //   setindata(currentuser);
  //   console.log(indata);

  // },[2000])
 

  const dispatch = useDispatch();

  const handleData = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();

    dispatch(updtUser({ id: id, name: data.name, email: data.email }));
    nav("/");
  };

  return (
    <>
      <form>
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

export default Update;
