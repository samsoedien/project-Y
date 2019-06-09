import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import {
  LockOutlined as LockOutlinedIcon,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';
import './Login.css';

import BG_IMG from '../../../assets/img/mountains-2098408.jpg';

const Login = ({
  email,
  password,
  showPassword,
  onChangeCallback,
  onSubmitLoginCallback,
  onShowPasswordCallback,
  errors,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    onSubmitLoginCallback(e);
  };

  const onShowPassword = () => {
    onShowPasswordCallback();
  };

  return (
    <div className="login">
      <Grid container component="main" className="login--container">
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{ backgroundImage: `url(${BG_IMG})` }}
          className="login__background-image"
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className="login__pane">
            <Avatar className="login__pane__avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Sign in</Typography>
            <form
              onSubmit={e => onSubmit(e)}
              noValidate
              autoComplete="off"
              className="login__pane__form"
            >
              <TextField
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
              <TextField
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                variant="outlined"
                margin="normal"
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
                        onClick={onShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="login__pane__form__submit"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#">
                    <Typography variant="body2">Forget Password</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register">
                    <Typography variant="body2">
                      Don't have an account? Sign Up
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
        </Grid>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitLoginCallback: PropTypes.func.isRequired,
  onShowPasswordCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

export default Login;
