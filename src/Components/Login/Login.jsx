import React, { useState, useContext } from "react";
import "./login.css";
import login1 from "../../assets/login1.png";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;

  const { logIn, logedInUser, setLogedInUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let handleBtn = (event) => {
    event.preventDefault();

    logIn(userName, userPassword);
  };

  let checkUserLogin = (data) => {
    axios
      .post(`${baseUri}/login`, {
        username: data.uname,
        password: data.upass,
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Loged in succesfully");
          setLogedInUser(data.uname);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          toast.error(err.response.data);
        } else if (err.response.status == 500) toast.error("failed to login");
      });
  };

  return (
    <div className="login row" id="login">
      {logedInUser && <Navigate to="/shop" replace={true} />}
      <div className="col-md-2">
        <img className="images" src={login1} alt="img" />
      </div>
      <div className="inputform col-md-1" id="login">
        <form
          onSubmit={handleSubmit((data) => {
            checkUserLogin(data);
          })}
        >
          <h4>Login</h4>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="uname"
            {...register("uname", { required: true })}
          />
          <br />
          {errors.uname && <p>username required</p>}
          <label>Password</label>
          <br />
          <input
            type="password"
            name="upass"
            {...register("upass", { required: true })}
          />
          <br />
          {errors.upass && <p>password required</p>}
          <button className="btn btn-primary">Login</button>
          <br />
          <span>New to app</span>
          <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
