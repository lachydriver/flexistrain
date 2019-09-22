import React from "react";
import Helmet from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import Axios from "axios";

class ForgotPassword extends React.Component {
  constructor(){
    super();
    this.state = {
      email: ""
    }
  };

  handleChange = (e) => {
    this.setState({email: e.target.value})
  }

  sendMail = (e) => {
    e.preventDefault();
    Axios.post('/api/email/forgotpassword', {email: this.state.email}).then(response => {console.log(response)}).catch(err => {console.log(err)})
  }


  render() {
    return (
      <div className="form-root">
        <Helmet>
          <title>Knot Spot - Forgot Password</title>
        </Helmet>

        <Link to="/" className="profile-button retakebutton">
          Home
        </Link>
        <div className="form">
        <div className="PageSwitcher">
            <NavLink
              to="/login"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Back
            </NavLink>
          </div>
          <div className="login">
            <h1 className="titleforgot">Forgot Password</h1>
            <form className="FormFields" noValidate>
              <div className="inputgrp">
                <div className="inputs">
                  <label className="labels" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                  <br />
                </div>
              </div>

              <button type="submit" className="login-btn" onClick={this.sendMail}>
                Forgot Password
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
