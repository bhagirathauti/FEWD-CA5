import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/Form.css"

export default function Form() {
  const [registrationSuccessful, setRegistrationSuccessful] = React.useState(false);
  const navigate = useNavigate();

  const {register,handleSubmit,formState: { errors},getValues,} = useForm({mode: "all",});

  const onSubmit = (data) => {
    if (
      data.name.length >= 3 &&
      data.name.length <= 30 &&
      data.email.includes("@") &&
      data.password.length >= 10 &&
      /[!@#$%^&*(),.?":{}|<>]/.test(data.password) &&
      data.password === data.repeatPassword
    ) {
      setRegistrationSuccessful(true);
      navigate("/NewHome");
    }
  };
  

  const validatePasswordMatch = (value) => {
    const { password } = getValues();
    return value === password || "Passwords do not match";
  };

  return (
    <div className="registrationForm">
      <div className="formm">
        <div className="nav">
          <Navbar />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputData">
            <label>Name :</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              {...register("name", {
                  required: "Name is Required !",
                  minLength: {
                      value: 3,
                      message: "Name should be at least 3 characters long",
                    },
                    maxLength: {
                        value: 30,
                        message: "Name should not exceed 30 characters",
                    },
                })}
                />
            {errors.name && (
                <p className="errorMessage">{errors.name.message}</p>
                )}
          </div>
          <div className="inputData">
            <label>Email :</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              {...register("email", {
                  required: "Email is Required !",
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid Email",
                },
            })}
            />
            {errors.email && (
              <p className="errorMessage">{errors.email.message}</p>
              )}
          </div>
          <div className="inputData">
            <label>Password :</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              {...register("password", {
                  required: "Password is Required !",
                  minLength: {
                      value: 10,
                      message: "Password must be more than 10 characters",
                    },
                    pattern: {
                        value: /[!@#$%^&*(),.?":{}|<>]/,
                        message: "Password must contain at least one special character",
                },
            })}
            />
            {errors.password && (
                <p className="errorMessage">{errors.password.message}</p>
                )}
          </div>
          <div className="inputData">
            <label>Repeat Password :</label>
            <input
              type="password"
              placeholder="Re-Enter Your Password"
              name="repeatPassword"
              {...register("repeatPassword", {
                  required: "Repeat Password is required !",
                  validate: validatePasswordMatch,
                })}
                />
            {errors.repeatPassword && (
              <p className="errorMessage">{errors.repeatPassword.message}</p>
              )}
          </div>
          <input
            type="submit"
            value="Sign up"
            className="btn"
            />
        </form>
            {registrationSuccessful && (
              <div>
                <p>Registration Successful !</p>
              </div>
            )}
      </div>
    </div>
  );
}