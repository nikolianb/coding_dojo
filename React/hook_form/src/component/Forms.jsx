import React from "react";

function Forms({ formData, handleChange, errors }) {
  return (
    <form>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "5px" }}
        />
        {errors.firstName && <small style={{ color: "red" }}>{errors.firstName}</small>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "5px" }}
        />
        {errors.lastName && <small style={{ color: "red" }}>{errors.lastName}</small>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "5px" }}
        />
        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "5px" }}
        />
        {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "5px" }}
        />
        {errors.confirmPassword && (
          <small style={{ color: "red" }}>{errors.confirmPassword}</small>
        )}
      </div>
    </form>
  );
}

export default Forms;
