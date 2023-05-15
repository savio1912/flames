import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialState = {
    email: { err: false },
    password: { err: false },
  };
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const submitHandler = async (event) => {
    const newError = initialState;
    let hasError = false;
    event.preventDefault();
    if (data.email === "") {
      newError.email.err = true;
      hasError = true;
    }
    if (data.password === "") {
      newError.email.err = true;
      hasError = true;
    }
    setError(newError);
    if (!hasError) {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
          console.log(response);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };
  return (
    <div>
      <h2 className="text-center">Login</h2>
      <div className="container d-flex justify-content-center">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="savio123@gmail.com"
              onChange={inputHandler}
            />
            {error.email.err ? (
              <span className="text-danger">Enter Email</span>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={inputHandler}
            />
            {error.password.err ? (
              <span className="text-danger">Enter Password</span>
            ) : null}
          </div>
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : null}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
