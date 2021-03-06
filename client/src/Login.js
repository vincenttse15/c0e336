import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  useTheme
} from "@material-ui/core";
import { useStyles, InputTextField } from "./components/SharedStyles/LoginSignupStyles";
import Banner from "./components/Banner/Banner";
import { login } from "./store/utils/thunkCreators";

const Login = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
            Don't have an account?
          </Typography>
          <Button onClick={() => history.push("/register")} className={classes.topRightBtn}>
            Create account
          </Button>
        </Grid>
        <Grid container item className={classes.bottomRightContainer} direction="column">
          <form onSubmit={handleLogin}>
            <Grid container item direction="column" className={classes.loginFormContainer} spacing={2}>
              <Grid item className={classes.welcomeContainer}>
                <Typography variant="h1" className={classes.welcome}>Welcome back!</Typography>
              </Grid>
              <Grid item>
                <FormControl margin="normal" required className={classes.textFieldContainer}>
                  <InputTextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl margin="normal" required className={classes.textFieldContainer}>
                  <InputTextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                  />
                </FormControl>
              </Grid>
              <Grid container item justifyContent="center">
                <Button type="submit" color="primary" variant="contained" className={classes.submitBtn}>
                  Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
