import "./App.css";

import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("");

  const getIsFormValid = () => {
    if (
      firstName.length >= 1 &&
      validateEmail(email) &&
      password?.value.length >= 8 &&
      (role)
    ) {
      return true;
    }
  };

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    console.log(firstName, lastName, email, password, role);
    clearForm();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              type="password"
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, ["value"]: e.target.value })
              }
            />
            {password.value.length <= 8 ? (
              <PasswordErrorMessage />
            ) : (
              (password.isTouched = true)
            )}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistrationForm;
