import React from "react";
import "./login.css";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../actions/authActions";
import  classnames  from "classnames";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value})
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


  render() {

    const { errors } = this.state;

    return (
      <div className="form-root">
        <Helmet>
          <title>Knot Spot - Register</title>
        </Helmet>
        <Link to="/" className="profile-button retakebutton">
            Home
        </Link>
        <div className="formreg">
          <div className="PageSwitcher">
            <NavLink
              exact
              to="/login"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Have an account?
            </NavLink>
          </div>
          <div className="register">
            <h1 className="titlereg">Register</h1>
            <form className="FormFields" onSubmit={this.onSubmit} noValidate>
              <div className="inputgrp">
                <div className="inputs">
                  <label className="labels" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className={classnames("", {
                      invalid: errors.username
                    })}
                    error={errors.username}
                    value={this.state.username}
                    onChange={this.onChange}
                  /><br/>
                  <span className="red-text">{errors.username}</span>
                </div>

                <div className="inputs">
                  <label className="labels" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    error={errors.email}
                    className={classnames("", {
                      invalid: errors.email
                    })}
                    value={this.state.email}
                    onChange={this.onChange}
                  /><br/>
                  <span className="red-text">{errors.email}</span>
                </div>

                <div className="inputs">
                  <label className="labels" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={classnames("", {
                      invalid: errors.password
                    })}
                    error={errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                  /><br/>
                  <span className="red-text">{errors.password}</span>
                </div>
                <p>TERMS AND CONDITIONS</p>
                <h1>Terms and Conditions ("Terms")</h1>


<p>Last updated: September 17, 2019</p>


<p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the www.knotspot.com.au website (the "Service") operated by Knot Spot ("us", "we", or "our").</p>

<p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

<p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. The Terms and Conditions agreement  for Knot Spot has been created with the help of <a href="https://www.termsfeed.com/">TermsFeed</a>.</p>


<h2>Accounts</h2>

<p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

<p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>


<h2>Links To Other Web Sites</h2>

<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Knot Spot.</p>

<p>Knot Spot has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Knot Spot shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

<p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>




<h2>Governing Law</h2>

<p>These Terms shall be governed and construed in accordance with the laws of Queensland, Australia, without regard to its conflict of law provisions.</p>

<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>


<h2>Changes</h2>

<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

<p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>


<h2>Contact Us</h2>

<p>If you have any questions about these Terms, please contact us.</p>
                <input type="checkbox" name="terms"/>Agree
              </div>
              <button
                className="reg-btn"
                type="submit"
                onClick={this.onSubmit}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
