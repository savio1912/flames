import React, { useState } from "react";

function Signup() {
  const initialState = {
    name: { err: false },
    email: { err: false },
    password: { err: false },
    confPass: { err: false },
    passCheck: { err: false },
  };
  const [errors, setErrors] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const submitHandler = (event) => {
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
    setErrors(error);
    if (!hasError) {
      setLoading(true);
    }
  };
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2 className="text-center">Signup Form</h2>
      <div class="container d-flex justify-content-center">
        <form onSubmit={submitHandler}>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Savio"
              onChange={inputHandler}
            />
            {errors.name.err ? (
              <span className="text-danger">Enter name</span>
            ) : null}
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="savio123@gmail.com"
              onChange={inputHandler}
            />
            {errors.email.err ? (
              <span className="text-danger">Enter Email</span>
            ) : null}
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              onChange={inputHandler}
            />
            {errors.password.err ? (
              <span className="text-danger">Enter Password</span>
            ) : null}
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
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
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : null}
          </div>
          <button type="submit" class="btn btn-primary" disabled={loading}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
