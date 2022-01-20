import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  useTheme,
  FormHelperText,
} from "@material-ui/core";
import { useStyles, InputTextField } from "./components/SharedStyles/LoginSignupStyles";
import Banner from "./components/Banner/Banner";
import { register } from "./store/utils/thunkCreators";

const Login = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.container} direction="row">
      <Banner />
      <Grid container item md={8} xs={12} className={classes.rightContainer} direction="column">
        <Grid container item className={classes.topRightContainer} justifyContent="flex-end" alignContent="center">
          <Typography className={classes.label} color="secondary">
            Already have an account?
          </Typography>
          <Button onClick={() => history.push("/login")} className={classes.topRightBtn}>
            Login
          </Button>
        </Grid>
        <Grid container item className={classes.bottomRightContainer} direction="column">
          <form onSubmit={handleRegister}>
            <Grid container item direction="column" className={classes.signupFormContainer} spacing={2}>
              <Grid item className={classes.welcomeContainer}>
                <Typography variant="h1" className={classes.welcome}>Create an account.</Typography>
              </Grid>
              <Grid item>
                <FormControl margin="normal" className={classes.textFieldContainer}>
                  <InputTextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl margin="normal" className={classes.textFieldContainer}>
                  <InputTextField
                    aria-label="e-mail address"
                    label="E-mail address"
                    name="email"
                    type="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl margin="normal" className={classes.textFieldContainer} error={!!formErrorMessage.confirmPassword}>
                  <InputTextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                </FormControl>
                <FormHelperText className={classes.error}>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </Grid>
              <Grid item>
                <FormControl margin="normal" className={classes.textFieldContainer} error={!!formErrorMessage.confirmPassword}>
                  <InputTextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                </FormControl>
                <FormHelperText className={classes.error}>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </Grid>
              <Grid container item justifyContent="center">
                <Button type="submit" variant="contained" color="primary" className={classes.submitBtn}>
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
