import React from "react";
import PropTypes from "prop-types";
const Login = ({
  usernamelabel,
  passwordlabel,
  usernametext,
  passwordtext,
  type,
  id,
  value,
  handleChange
}) => (
  <div className="form-group">
    <label htmlFor={usernamelabel}>{usernametext}</label>
    <input
      type={type}
      className="account-username"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />

    <label htmlFor={passwordlabel}>{passwordtext}</label>
    <input
      type={type}
      className="account-password"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);
Login.propTypes = {
  usernamelabel: PropTypes.string.isRequired,
  passwordlabel: PropTypes.string.isRequired,
  usernametext: PropTypes.string.isRequired,
  passwordtext: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Login;
