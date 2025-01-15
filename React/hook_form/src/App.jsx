import React, { useState } from "react";
import Forms from "./component/Forms";


function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = (name, value) => {
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
      return;
    }

    switch (name) {
      case "firstName":
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstName: value.length < 2 ? "First Name must be at least 2 characters." : "",
        }));
        break;
      case "lastName":
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastName: value.length < 2 ? "Last Name must be at least 2 characters." : "",
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: value.length < 5 ? "Email must be at least 5 characters." : "",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: value.length < 8 ? "Password must be at least 8 characters." : "",
          confirmPassword:
            formData.confirmPassword && formData.confirmPassword !== value
              ? "Passwords must match."
              : "",
        }));
        break;
      case "confirmPassword":
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: value !== formData.password ? "Passwords must match." : "",
        }));
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validate(name, value);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>React Form </h1>
      <Forms formData={formData} handleChange={handleChange} errors={errors} />
      <h3>Your Form Data</h3>
      <div>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
      </div>
    </div>
  );
}

export default App;
