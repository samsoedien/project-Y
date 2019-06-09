import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import {
  LockOutlined as LockOutlinedIcon,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';
import './Register.css';

const Register = ({
  name,
  email,
  password,
  passwordConfirm,
  showPassword,
  onChangeCallback,
  onSubmitRegisterCallback,
  onShowPasswordCallback,
  errors,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    onSubmitRegisterCallback(e);
  };

  const onShowPasswordHandle = () => {
    onShowPasswordCallback();
  };

  return (
    <div className="register">
      <Container component="main" maxWidth="xs">
        <div className="register__pane">
          <Avatar className="register__pane__avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign up</Typography>
          <form
            onSubmit={e => onSubmit(e)}
            noValidate
            autoComplete="off"
            className="register__pane__form"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                  autoComplete="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={onShowPasswordHandle}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={e => onChange(e)}
                  variant="outlined"
                  required
                  fullWidth
                  label=" Confirm Password"
                  id="passwordConfirm"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="register__pane__form__submit"
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login">
                  <Typography variant="body2">
                    Already have an account? Sign in
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              Join us now
            </Typography>
          </Box>
        </div>
      </Container>
    </div>
  );
};

Register.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  showPassword: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitRegisterCallback: PropTypes.func.isRequired,
  onShowPasswordCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
  }).isRequired,
};

export default Register;
