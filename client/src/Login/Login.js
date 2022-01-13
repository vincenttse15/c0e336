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
import { useStyles, InputTextField } from "./LoginStyles";
import backgroundImage from '../assets/bg-img.png';
import bubble from '../assets/bubble.svg';
import { login } from "../store/utils/thunkCreators";

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
      <Grid container item md={4} className={classes.leftContainer} justifyContent="center">
        <img src={backgroundImage} alt="" className={classes.backgroundImage} />
        <Grid container item className={classes.iconTextContainer} direction="column" alignContent="center" xs={12} spacing={5}>
          <Grid item>
            <img src={bubble} alt="" className={classes.bubbleIcon} />
          </Grid>
          <Grid item>
            <Typography className={classes.description}>
              Converse with anyone with any language
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item md={8} xs={12} className={classes.rightContainer} direction="column">
        <Grid container item className={classes.topRightContainer} justifyContent="flex-end" alignContent="center">
          <Typography className={classes.label}>
            Don't have an account?
          </Typography>
          <Button onClick={() => history.push("/register")} className={classes.createAccountBtn}>
            Create account
          </Button>
        </Grid>
        <Grid container item className={classes.bottomRightContainer} direction="column">
          <form onSubmit={handleLogin}>
            <Grid container item direction="column" className={classes.formContainer} spacing={2}>
              <Grid item className={classes.welcomeContainer}>
                <h1 className={classes.welcome}>Welcome back!</h1>
              </Grid>
              <Grid item>
                <FormControl margin="normal" required style={{ width: '100%' }}>
                  <InputTextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl margin="normal" required style={{ width: '100%' }}>
                  <InputTextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                  />
                </FormControl>
              </Grid>
              <Grid container item justifyContent="center">
                <Button type="submit" variant="contained" className={classes.loginBtn}>
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
