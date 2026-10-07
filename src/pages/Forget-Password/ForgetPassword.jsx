import React from 'react'
import Typography from '../../components/Typography/Typography';
import Button from '../../components/Button/Button';
import '../Forget-Password/ForgetPassword.css';
const ForgetPassword = () => {
  return (
    <div>
      <Typography variant="h2">
        Forgot Password
      </Typography><br /><br />

      <div className="forgot-password-form">

        <div className="form-field">
          <Typography variant="label" htmlFor="username">
            Username
          </Typography>

          <Typography
            variant="input"
            type="text"
            id="username"
          />
        </div>

        <div className="form-field">
          <Typography variant="label" htmlFor="password">
            New Password
          </Typography>

          <Typography
            variant="input"
            type="password"
            id="password"
          />
        </div>

        <div className="form-field">
          <Typography variant="label" htmlFor="confirmPassword">
            Confirm Password
          </Typography>

          <Typography
            variant="input"
            type="password"
            id="confirmPassword"
          />
        </div>

        <Button variant="primary">
          Reset Password
        </Button>

      </div>
    </div>
  )
}

export default ForgetPassword;
