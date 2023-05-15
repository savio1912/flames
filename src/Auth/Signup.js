import React, { useState } from "react";

import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const initialState = {
    name: { err: false },
    email: { err: false },
    password: { err: false },
    confPass: { err: false },
    passCheck: { err: false },
    authError: { err: false },
  };
  const [errors, setErrors] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const submitHandler = async (event) => {
    event.preventDefault();
    let hasError = false;
    let error = initialState;
    if (data.name === "") {
      error.name.err = true;
      hasError = true;
    }
    if (data.email === "") {
      error.email.err = true;
      hasError = true;
    }
    if (data.password === "") {
      error.password.err = true;
      hasError = true;
    }
    if (data.confirmPassword === "") {
      error.confPass.err = true;
      hasError = true;
    }
    if (data.password !== data.confirmPassword) {
      error.passCheck.err = true;
      hasError = true;
    }

    if (!hasError) {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
          console.log(response);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          error.authError.err = true;
          setErrors(error);

          setLoading(false);
        });
    }
  };
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2 className="text-center">Signup</h2>
      <div className="container d-flex justify-content-center">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Savio"
              onChange={inputHandler}
            />
            {errors.name.err ? (
              <span className="text-danger">Enter name</span>
            ) : null}
          </div>
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
            {errors.email.err ? (
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
            {errors.password.err ? (
              <span className="text-danger">Enter Password</span>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="confpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confpassword"
              name="confirmPassword"
              onChange={inputHandler}
            />
            {errors.confPass.err ? (
              <span className="text-danger">Enter Password again</span>
            ) : null}
            {errors.passCheck.err ? (
              <span className="text-danger">
                Password and Confirm password must be same
              </span>
            ) : null}
            {loading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Signup
          </button>
          <div>
            Already an user? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
