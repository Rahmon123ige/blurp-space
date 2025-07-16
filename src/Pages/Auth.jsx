import React, { useEffect, useState } from "react";
import "./CSS/Auth.css";
import {
  FaSignInAlt,
  FaUserPlus,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaCheckCircle
} from "react-icons/fa";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.classList.add("touch-device");
  }, []);

  const toggleForm = (type) => {
    setIsLogin(type === "login");
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    setSuccessText(
      type === "login"
        ? "You have successfully signed in!"
        : "Your account has been created successfully!"
    );
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="auth-wrapper">
      <div className="background-container">
        <div className="background-overlay"></div>
        <div className="particles"></div>
      </div>
      <div className="container">
        <div className="glass-card">
          <div className="toggle-container">
            <button
              className={`toggle-btn ${isLogin ? "active" : ""}`}
              onClick={() => toggleForm("login")}
            >
              <FaSignInAlt /> Login
            </button>
            <button
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              onClick={() => toggleForm("register")}
            >
              <FaUserPlus /> Register
            </button>
          </div>

          {isLogin ? (
            <div className="form-container active">
              <div className="form-header">
                <h2>Welcome Back!</h2>
                <p>Sign in to your account</p>
              </div>
              <form onSubmit={(e) => handleSubmit(e, "login")} className="auth-form">
                <div className="input-group">
                  <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <input type="email" placeholder="Email Address" required />
                    <span className="input-border"></span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-container">
                    <FaLock className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <span className="input-border"></span>
                  </div>
                </div>

                <div className="form-options">
                  <a href="#" className="forgot-password">
                    Forgot password?
                  </a>
                </div>

                <button type="submit" className="submit-btn login-btn">
                  <span>Sign In</span>
                  <FaSignInAlt />
                </button>
              </form>
              <div className="social-login">
                <p>Or sign in with</p>
                <div className="social-buttons">
                  <button className="social-btn google">
                    <FaGoogle />
                  </button>
                  <button className="social-btn facebook">
                    <FaFacebookF />
                  </button>
                  <button className="social-btn twitter">
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="form-container active">
              <div className="form-header">
                <h2>Create Account</h2>
                <p>Join our community</p>
              </div>
              <form onSubmit={(e) => handleSubmit(e, "register")} className="auth-form">
                <div className="input-row">
                  <div className="input-group">
                    <div className="input-container">
                      <FaUser className="input-icon" />
                      <input type="text" placeholder="First Name" required />
                      <span className="input-border"></span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-container">
                      <FaUser className="input-icon" />
                      <input type="text" placeholder="Last Name" required />
                      <span className="input-border"></span>
                    </div>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <input type="email" placeholder="Email Address" required />
                    <span className="input-border"></span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-container">
                    <FaLock className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <span className="input-border"></span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-container">
                    <FaLock className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <span className="input-border"></span>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" required /> I accept the Terms and Privacy Policy
                  </label>
                </div>

                <button type="submit" className="submit-btn register-btn">
                  <span>Sign Up</span>
                  <FaUserPlus />
                </button>
              </form>
              <div className="social-login">
                <p>Or sign up with</p>
                <div className="social-buttons">
                  <button className="social-btn google">
                    <FaGoogle />
                  </button>
                  <button className="social-btn facebook">
                    <FaFacebookF />
                  </button>
                  <button className="social-btn twitter">
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showSuccess && (
        <div className="success-message show">
          <div className="success-content">
            <FaCheckCircle />
            <h3>Success!</h3>
            <p>{successText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
